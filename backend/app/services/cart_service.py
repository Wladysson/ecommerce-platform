from sqlalchemy import select, delete
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import HTTPException, status

from app.db.models.product import Product
from app.db.models.cart_item import CartItem
from app.db.models.user import User


class CartService:

    @staticmethod
    async def get_cart_products(
        db: AsyncSession,
        current_user: User
    ):

        stmt = (
            select(CartItem, Product)
            .join(Product, Product.id == CartItem.product_id)
            .where(CartItem.user_id == current_user.id)
        )

        result = await db.execute(stmt)

        items = result.all()

        return [
            {
                **product.to_dict(),
                "quantity": cart.quantity
            }
            for cart, product in items
        ]

    @staticmethod
    async def add_to_cart(
        db: AsyncSession,
        current_user: User,
        product_id: int
    ):

        product = await db.get(Product, product_id)

        if not product:
            raise HTTPException(
                status_code=404,
                detail="Product not found"
            )

        stmt = select(CartItem).where(
            CartItem.user_id == current_user.id,
            CartItem.product_id == product_id
        )

        result = await db.execute(stmt)

        cart_item = result.scalar_one_or_none()

        if cart_item:
            cart_item.quantity += 1
        else:
            cart_item = CartItem(
                user_id=current_user.id,
                product_id=product_id,
                quantity=1
            )
            db.add(cart_item)

        await db.commit()

        return {"message": "Product added to cart"}

    @staticmethod
    async def remove_all_from_cart(
        db: AsyncSession,
        current_user: User,
        product_id: int | None = None
    ):

        if product_id is None:

            stmt = delete(CartItem).where(
                CartItem.user_id == current_user.id
            )

        else:

            stmt = delete(CartItem).where(
                CartItem.user_id == current_user.id,
                CartItem.product_id == product_id
            )

        await db.execute(stmt)
        await db.commit()

        return {
            "message": "Cart updated"
        }

    @staticmethod
    async def update_quantity(
        db: AsyncSession,
        current_user: User,
        product_id: int,
        quantity: int
    ):

        stmt = select(CartItem).where(
            CartItem.user_id == current_user.id,
            CartItem.product_id == product_id
        )

        result = await db.execute(stmt)

        cart_item = result.scalar_one_or_none()

        if not cart_item:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Product not found"
            )

        if quantity <= 0:

            await db.delete(cart_item)

        else:

            cart_item.quantity = quantity

        await db.commit()

        return {
            "message": "Cart updated"
        }