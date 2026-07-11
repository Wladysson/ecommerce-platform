from sqlalchemy import select, func
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.models.user import User
from app.db.models.product import Product
from app.db.models.order import Order


class AdminService:

    @staticmethod
    async def get_dashboard(
        db: AsyncSession
    ):

        users_result = await db.execute(
            select(func.count(User.id))
        )

        products_result = await db.execute(
            select(func.count(Product.id))
        )

        orders_result = await db.execute(
            select(func.count(Order.id))
        )

        return {
            "total_users": users_result.scalar() or 0,
            "total_products": products_result.scalar() or 0,
            "total_orders": orders_result.scalar() or 0,
        }