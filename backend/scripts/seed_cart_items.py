import asyncio
import random

from sqlalchemy import select

from app.db.database import AsyncSessionLocal
from app.db.models import User, Product, CartItem


async def seed_cart_items(quantity=3000):

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


        print("Criando itens de carrinho...")


        items = []


        for _ in range(quantity):

            item = CartItem(
                user_id=random.choice(users).id,
                product_id=random.choice(products).id,
                quantity=random.randint(1, 5)
            )

            items.append(item)


        session.add_all(items)

        await session.commit()


        print(
            f"{len(items)} itens de carrinho criados!"
        )


if __name__ == "__main__":
    asyncio.run(seed_cart_items())