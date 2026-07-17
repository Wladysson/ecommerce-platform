import asyncio
from scripts.seed_users import seed_users
from scripts.seed_products import seed_products
from scripts.seed_orders import seed_orders
from scripts.seed_cart_items import seed_cart_items


async def seed_all():

    print("Criando usuários...")
    await seed_users()

    print("Criando produtos...")
    await seed_products()

    print("Criando pedidos...")
    await seed_orders()

    print("Criando carrinhos...")
    await seed_cart_items()

    print("Seed finalizado!")


if __name__ == "__main__":
    asyncio.run(seed_all())