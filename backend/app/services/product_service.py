import json
import random

from fastapi import HTTPException
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.models.product import Product
from app.db.redis import redis_client
from app.integrations.cloudinary import cloudinary


class ProductService:

    @staticmethod
    async def get_all_products(db: AsyncSession):

        result = await db.execute(
            select(Product)
        )

        products = result.scalars().all()

        return {"products": products}

    @staticmethod
    async def get_featured_products(db: AsyncSession):

        cached = await redis_client.get("featured_products")

        if cached:
            return json.loads(cached)

        result = await db.execute(
            select(Product).where(
                Product.is_featured == True
            )
        )

        products = result.scalars().all()

        serialized = [product.to_dict() for product in products]

        await redis_client.set(
            "featured_products",
            json.dumps(serialized)
        )

        return serialized

    @staticmethod
    async def create_product(
        db: AsyncSession,
        name: str,
        description: str,
        price: float,
        image: str,
        category: str
    ):

        product = Product(
            name=name,
            description=description,
            price=price,
            image=image,
            category=category
        )

        db.add(product)

        await db.commit()

        await db.refresh(product)

        return product

    @staticmethod
    async def delete_product(
        db: AsyncSession,
        product_id: int
    ):

        product = await db.get(Product, product_id)

        if not product:
            raise HTTPException(
                status_code=404,
                detail="Product not found"
            )

        if product.image:

            public_id = (
                product.image.split("/")[-1]
                .split(".")[0]
            )

            try:

                cloudinary.uploader.destroy(
                    f"products/{public_id}"
                )

            except Exception:
                pass

        await db.delete(product)

        await db.commit()

        await ProductService.update_featured_products_cache(db)

        return {
            "message": "Product deleted successfully"
        }

    @staticmethod
    async def get_recommended_products(
        db: AsyncSession
    ):

        result = await db.execute(
            select(Product)
        )

        products = result.scalars().all()

        random.shuffle(products)

        return products[:4]

    @staticmethod
    async def get_products_by_category(
        db: AsyncSession,
        category: str
    ):

        result = await db.execute(
            select(Product).where(
                Product.category == category
            )
        )

        products = result.scalars().all()

        return {
            "products": products
        }

    @staticmethod
    async def toggle_featured_product(
        db: AsyncSession,
        product_id: int
    ):

        product = await db.get(
            Product,
            product_id
        )

        if not product:
            raise HTTPException(
                status_code=404,
                detail="Product not found"
            )

        product.is_featured = not product.is_featured

        await db.commit()

        await db.refresh(product)

        await ProductService.update_featured_products_cache(
            db
        )

        return product

    @staticmethod
    async def update_featured_products_cache(
        db: AsyncSession
    ):

        result = await db.execute(
            select(Product).where(
                Product.is_featured == True
            )
        )

        products = result.scalars().all()

        await redis_client.set(
            "featured_products",
            json.dumps(
                [
                    product.to_dict()
                    for product in products
                ]
            )
        )