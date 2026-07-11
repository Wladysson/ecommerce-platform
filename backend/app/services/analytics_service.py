from datetime import date, datetime, timedelta

from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.models.order import Order
from app.db.models.product import Product
from app.db.models.user import User


class AnalyticsService:

    @staticmethod
    async def get_analytics_data(db: AsyncSession):

        total_users = await db.scalar(
            select(func.count(User.id))
        )

        total_products = await db.scalar(
            select(func.count(Product.id))
        )

        result = await db.execute(
            select(
                func.count(Order.id),
                func.coalesce(func.sum(Order.total_amount), 0)
            )
        )

        total_sales, total_revenue = result.one()

        return {
            "users": total_users,
            "products": total_products,
            "totalSales": total_sales,
            "totalRevenue": float(total_revenue),
        }

    @staticmethod
    async def get_daily_sales_data(
        db: AsyncSession,
        start_date: date,
        end_date: date
    ):

        result = await db.execute(
            select(
                func.date(Order.created_at).label("date"),
                func.count(Order.id).label("sales"),
                func.coalesce(
                    func.sum(Order.total_amount),
                    0
                ).label("revenue")
            )
            .where(
                Order.created_at >= start_date,
                Order.created_at <= end_date
            )
            .group_by(func.date(Order.created_at))
            .order_by(func.date(Order.created_at))
        )

        rows = result.all()

        sales_map = {
            row.date.isoformat(): {
                "sales": row.sales,
                "revenue": float(row.revenue)
            }
            for row in rows
        }

        dates = AnalyticsService._get_dates_in_range(
            start_date,
            end_date
        )

        return [
            {
                "date": current_date,
                "sales": sales_map.get(current_date, {}).get("sales", 0),
                "revenue": sales_map.get(current_date, {}).get("revenue", 0),
            }
            for current_date in dates
        ]

    @staticmethod
    def _get_dates_in_range(
        start_date: date,
        end_date: date
    ):

        dates = []

        current = start_date

        while current <= end_date:
            dates.append(current.isoformat())
            current += timedelta(days=1)

        return dates