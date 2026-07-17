import asyncio

from app.db.database import AsyncSessionLocal
from app.db.models import Product

from scripts.data.products_data import generate_products


async def seed_products():

    products_data = generate_products(5000)

    async with AsyncSessionLocal() as session:

        print("Inserindo produtos...")

        products = []

        for data in products_data:

            product = Product(
                name=data["name"],
                description=data["description"],
                brand=data["brand"],
                category=data["category"],
                price=data["price"],
                stock=data["stock"],
                image=data["image"],
                specifications=data["specifications"],
                is_featured=data["is_featured"],
            )

            products.append(product)

        session.add_all(products)

        await session.commit()

        print(f"{len(products)} produtos inseridos com sucesso!")


if __name__ == "__main__":
    asyncio.run(seed_products())
