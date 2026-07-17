from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.dependencies import get_current_user
from app.db.database import get_db
from app.db.models.user import User
from app.schemas.cart import AddToCartRequest, UpdateCartRequest
from app.services.cart_service import CartService

router = APIRouter(
    prefix="/cart",
    tags=["Cart"],
)


@router.get("/")
async def get_cart_products(
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    return await CartService.get_cart_products(
        db=db,
        current_user=current_user,
    )


@router.post("/")
async def add_to_cart(
    data: AddToCartRequest,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    return await CartService.add_to_cart(
        db=db,
        current_user=current_user,
        product_id=data.product_id,
    )


@router.delete("/")
async def remove_all_from_cart(
    product_id: int | None = None,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    return await CartService.remove_all_from_cart(
        db=db,
        current_user=current_user,
        product_id=product_id,
    )


@router.put("/{product_id}")
async def update_quantity(
    product_id: int,
    data: UpdateCartRequest,
    current_user: User = Depends(get_current_user),
    db: AsyncSession = Depends(get_db),
):
    return await CartService.update_quantity(
        db=db,
        current_user=current_user,
        product_id=product_id,
        quantity=data.quantity,
    )