import asyncio
import random
from datetime import datetime, timedelta

from sqlalchemy import select

from app.db.database import AsyncSessionLocal
from app.db.models import User, Product, Order, OrderItem


def random_date():

    return datetime.utcnow() - timedelta(
        days=random.randint(1, 180)
    )


async def seed_orders(quantity=5000):

    async with AsyncSessionLocal() as session:

        users = (
            await session.execute(
                select(User).where(
                    User.role == "customer"
                )
            )
        ).scalars().all()

        products = (
            await session.execute(
                select(Product)
            )
        ).scalars().all()


        if not users or not products:
            print("Usuários ou produtos não encontrados")
            return


        print("Criando pedidos...")


        orders = []


        for _ in range(quantity):

            user = random.choice(users)

            order = Order(
                user_id=user.id,
                total_amount=0,
                created_at=random_date()
            )


            total = 0


            for _ in range(random.randint(1, 5)):

                product = random.choice(products)

                quantity_product = random.randint(1, 3)

                price = float(product.price)

                total += price * quantity_product


                item = OrderItem(
                    product=product,
                    quantity=quantity_product,
                    price=price
                )

                order.items.append(item)


            order.total_amount = total

            orders.append(order)


        session.add_all(orders)

        await session.commit()


        print(
            f"{len(orders)} pedidos criados!"
        )


if __name__ == "__main__":
    asyncio.run(seed_orders())