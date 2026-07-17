import json
import random
import string
from datetime import datetime, timedelta

from fastapi import HTTPException
from sqlalchemy import select, delete
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.config import settings
from app.db.models.coupon import Coupon
from app.db.models.order import Order
from app.db.models.order_item import OrderItem
from app.db.models.user import User
from app.integration.stripe import stripe


class PaymentService:

    @staticmethod
    async def create_checkout_session(
        db: AsyncSession,
        current_user: User,
        products: list,
        coupon_code: str | None
    ):

        if not products:
            raise HTTPException(
                status_code=400,
                detail="Invalid or empty products array"
            )

        total_amount = 0
        line_items = []

        for product in products:

            amount = round(product["price"] * 100)

            total_amount += amount * product["quantity"]

            line_items.append(
                {
                    "price_data": {
                        "currency": "usd",
                        "product_data": {
                            "name": product["name"],
                            "images": [product["image"]],
                        },
                        "unit_amount": amount,
                    },
                    "quantity": product["quantity"],
                }
            )

        coupon = None

        if coupon_code:

            stmt = select(Coupon).where(
                Coupon.code == coupon_code,
                Coupon.user_id == current_user.id,
                Coupon.is_active == True
            )

            result = await db.execute(stmt)

            coupon = result.scalar_one_or_none()

            if coupon:
                total_amount -= round(
                    total_amount * coupon.discount_percentage / 100
                )

        discounts = []

        if coupon:
            coupon_id = await PaymentService.create_stripe_coupon(
                coupon.discount_percentage
            )

            discounts.append({"coupon": coupon_id})

        session = stripe.checkout.Session.create(
            payment_method_types=["card"],
            line_items=line_items,
            mode="payment",
            success_url=f"{settings.client_url}/purchase-success?session_id={{CHECKOUT_SESSION_ID}}",
            cancel_url=f"{settings.client_url}/purchase-cancel",
            discounts=discounts,
            metadata={
                "userId": str(current_user.id),
                "couponCode": coupon_code or "",
                "products": json.dumps(products),
            },
        )

        if total_amount >= 20000:
            await PaymentService.create_new_coupon(
                db,
                current_user.id
            )

        return {
            "id": session.id,
            "totalAmount": total_amount / 100
        }

    @staticmethod
    async def checkout_success(
        db: AsyncSession,
        session_id: str
    ):

        session = stripe.checkout.Session.retrieve(session_id)

        if session.payment_status != "paid":
            raise HTTPException(
                status_code=400,
                detail="Payment not completed"
            )

        coupon_code = session.metadata.get("couponCode")

        if coupon_code:

            stmt = select(Coupon).where(
                Coupon.code == coupon_code,
                Coupon.user_id == int(session.metadata["userId"])
            )

            result = await db.execute(stmt)

            coupon = result.scalar_one_or_none()

            if coupon:
                coupon.is_active = False

        order = Order(
            user_id=int(session.metadata["userId"]),
            total_amount=session.amount_total / 100,
            stripe_session_id=session.id,
        )

        db.add(order)

        await db.flush()

        products = json.loads(
            session.metadata["products"]
        )

        for product in products:

            db.add(
                OrderItem(
                    order_id=order.id,
                    product_id=product["id"],
                    quantity=product["quantity"],
                    price=product["price"],
                )
            )

        await db.commit()

        return {
            "success": True,
            "message": "Payment successful",
            "orderId": order.id,
        }

    @staticmethod
    async def create_stripe_coupon(
        discount_percentage: int
    ):

        coupon = stripe.Coupon.create(
            percent_off=discount_percentage,
            duration="once",
        )

        return coupon.id

    @staticmethod
    async def create_new_coupon(
        db: AsyncSession,
        user_id: int
    ):

        await db.execute(
            delete(Coupon).where(
                Coupon.user_id == user_id
            )
        )

        code = "GIFT" + "".join(
            random.choices(
                string.ascii_uppercase + string.digits,
                k=6
            )
        )

        coupon = Coupon(
            code=code,
            discount_percentage=10,
            expiration_date=datetime.utcnow() + timedelta(days=30),
            is_active=True,
            user_id=user_id,
        )

        db.add(coupon)

        await db.commit()

        return coupon