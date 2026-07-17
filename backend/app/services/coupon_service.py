from datetime import datetime

from fastapi import HTTPException, status
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.models.coupon import Coupon
from app.db.models.user import User


class CouponService:

    @staticmethod
    async def get_coupon(
        db: AsyncSession,
        current_user: User
    ):

        stmt = (
            select(Coupon)
            .where(
                Coupon.user_id == current_user.id,
                Coupon.is_active == True
            )
        )

        result = await db.execute(stmt)

        coupon = result.scalar_one_or_none()

        return coupon

    @staticmethod
    async def validate_coupon(
        db: AsyncSession,
        current_user: User,
        code: str
    ):

        stmt = (
            select(Coupon)
            .where(
                Coupon.code == code,
                Coupon.user_id == current_user.id,
                Coupon.is_active == True
            )
        )

        result = await db.execute(stmt)

        coupon = result.scalar_one_or_none()

        if coupon is None:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Coupon not found"
            )

        if coupon.expiration_date < datetime.utcnow():

            coupon.is_active = False

            await db.commit()

            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Coupon expired"
            )

        return {
            "message": "Coupon is valid",
            "code": coupon.code,
            "discountPercentage": coupon.discount_percentage,
        }