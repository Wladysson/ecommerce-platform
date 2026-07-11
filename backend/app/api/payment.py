from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.dependencies import get_current_user
from app.db.database import get_db
from app.db.models.user import User
from app.schemas.payment import (
    CheckoutRequest,
    CheckoutSuccessRequest,
)
from app.services.payment_service import PaymentService

router = APIRouter(
    prefix="/payments",
    tags=["Payments"],
)


@router.post("/create-checkout-session")
async def create_checkout_session(
    data: CheckoutRequest,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    return await PaymentService.create_checkout_session(
        db=db,
        current_user=current_user,
        products=data.products,
        coupon_code=data.coupon_code,
    )


@router.post("/checkout-success")
async def checkout_success(
    data: CheckoutSuccessRequest,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    return await PaymentService.checkout_success(
        db=db,
        session_id=data.session_id,
    )