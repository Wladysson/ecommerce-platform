import asyncio

from faker import Faker
from passlib.context import CryptContext

from app.db.database import AsyncSessionLocal
from app.db.models.user import User, UserRole


fake = Faker("pt_BR")

pwd_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto"
)


def generate_users(quantity=1000):

    users = []

    for index in range(quantity):

        users.append({
            "name": fake.name(),
            "email": f"cliente{index}@email.com",
            "password": "123456"
        })

    return users



async def seed_users():

    users_data = generate_users(1000)

    async with AsyncSessionLocal() as session:

        print("Criando clientes...")

        users = []

        for data in users_data:

            user = User(
                name=data["name"],
                email=data["email"],
                password=pwd_context.hash(
                    data["password"]
                ),
                role=UserRole.CUSTOMER
            )

            users.append(user)

        session.add_all(users)

        await session.commit()

        print(
            f"{len(users)} clientes criados!"
        )


if __name__ == "__main__":
    asyncio.run(seed_users())