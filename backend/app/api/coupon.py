from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.dependencies import get_current_user
from app.db.database import get_db
from app.db.models.user import User
from app.schemas.coupon import ValidateCouponRequest
from app.services.coupon_service import CouponService

router = APIRouter(
    prefix="/coupons",
    tags=["Coupons"],
)


@router.get("/")
async def get_coupon(
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    return await CouponService.get_coupon(
        db=db,
        current_user=current_user,
    )


@router.post("/validate")
async def validate_coupon(
    data: ValidateCouponRequest,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    return await CouponService.validate_coupon(
        db=db,
        current_user=current_user,
        code=data.code,
    )