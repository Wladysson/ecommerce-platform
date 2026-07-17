from datetime import date, timedelta

from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.models.order import Order
from app.db.models.product import Product
from app.db.models.user import User
from app.db.models.cart_item import CartItem


class AnalyticsService:


    @staticmethod
    async def get_analytics_data(
        db: AsyncSession
    ):

        # Total usuários
        total_users = await db.scalar(
            select(
                func.count(User.id)
            )
        )


        # Total produtos
        total_products = await db.scalar(
            select(
                func.count(Product.id)
            )
        )


        # Total pedidos e receita
        result = await db.execute(
            select(
                func.count(Order.id),
                func.coalesce(
                    func.sum(Order.total_amount),
                    0
                )
            )
        )

        total_orders, total_revenue = result.one()


        # Ticket médio
        average_ticket = 0

        if total_orders:
            average_ticket = (
                float(total_revenue)
                / total_orders
            )


        # Produtos estoque baixo
        low_stock = await db.scalar(
            select(
                func.count(Product.id)
            )
            .where(
                Product.stock <= 10
            )
        )


        # Carrinhos abandonados
        abandoned_carts = await db.scalar(
            select(
                func.count(CartItem.id)
            )
        )


        return {

            "users": total_users or 0,

            "products": total_products or 0,

            "orders": total_orders or 0,

            "revenue": float(
                total_revenue or 0
            ),

            "averageTicket": round(
                average_ticket,
                2
            ),

            "conversion": 0,

            "lowStock": low_stock or 0,

            "abandonedCarts": abandoned_carts or 0,

        }



    @staticmethod
    async def get_daily_sales_data(
        db: AsyncSession,
        start_date: date,
        end_date: date
    ):

        result = await db.execute(
            select(
                func.date(
                    Order.created_at
                ).label("date"),

                func.count(
                    Order.id
                ).label("sales"),

                func.coalesce(
                    func.sum(Order.total_amount),
                    0
                ).label("revenue")
            )
            .where(
                Order.created_at >= start_date,
                Order.created_at <= end_date
            )
            .group_by(
                func.date(Order.created_at)
            )
            .order_by(
                func.date(Order.created_at)
            )
        )


        rows = result.all()


        sales_map = {

            row.date.isoformat(): {

                "sales": row.sales,

                "revenue": float(
                    row.revenue
                )

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

                "sales": sales_map.get(
                    current_date,
                    {}
                ).get(
                    "sales",
                    0
                ),

                "revenue": sales_map.get(
                    current_date,
                    {}
                ).get(
                    "revenue",
                    0
                )

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

            dates.append(
                current.isoformat()
            )

            current += timedelta(days=1)


        return dates