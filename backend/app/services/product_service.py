import json
import random

from fastapi import HTTPException
from sqlalchemy import case, or_, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.models.product import Product
from app.db.redis import redis_client
from app.integration.claudinary import cloudinary


class ProductService:
    
    @staticmethod
    async def get_featured_products(
        db: AsyncSession
    ):

        cached = await redis_client.get(
            "featured_products"
        )

        if cached:

            return json.loads(
                cached
            )


        result = await db.execute(
            select(Product)
            .where(
                Product.is_featured == True
            )
        )

        products = result.scalars().all()


        serialized = [
            product.to_dict()
            for product in products
        ]


        await redis_client.set(
            "featured_products",
            json.dumps(serialized)
        )


        return serialized

    @staticmethod
    async def get_all_products(db: AsyncSession):

        result = await db.execute(
            select(Product)
        )

        products = result.scalars().all()

        return {
            "products": [
                product.to_dict()
                for product in products
            ]
        }

    @staticmethod
    async def get_inventory(
        db: AsyncSession,
        search: str | None = None,
        category: str | None = None,
        status: str | None = None,
    ):

        query = select(Product)

        if search:
            query = query.where(
                Product.name.ilike(f"%{search}%")
            )

        if category:
            query = query.where(
                Product.category == category
            )

        if status == "in_stock":
            query = query.where(
                Product.stock > 10
            )

        elif status == "low_stock":
            query = query.where(
                Product.stock > 0,
                Product.stock <= 10,
            )

        elif status == "out_of_stock":
            query = query.where(
                Product.stock == 0
            )

        result = await db.execute(query)

        products = result.scalars().all()

        return {
            "products": [
                product.to_dict()
                for product in products
            ],
            "totalProducts": len(products),
            "totalStock": sum(
                product.stock
                for product in products
            ),
        }

    @staticmethod
    async def get_product(
        db: AsyncSession,
        product_id: int,
    ):

        product = await db.get(
            Product,
            product_id,
        )

        if not product:
            raise HTTPException(
                status_code=404,
                detail="Product not found",
            )

        return product.to_dict()

    
    @staticmethod
    async def get_featured_products(
        db: AsyncSession
    ):

        cached = await redis_client.get(
            "featured_products"
        )

        if cached:
            return json.loads(cached)

        result = await db.execute(
            select(Product).where(
                    Product.is_featured == True
            )
        )

        products = result.scalars().all()

        serialized = [
            product.to_dict()
            for product in products
        ]

        await redis_client.set(
                "featured_products",
                json.dumps(serialized)
        )

        return serialized

    @staticmethod
    async def toggle_featured_product(
        db: AsyncSession,
        product_id: int,
        ):

            product = await db.get(
                Product,
                product_id,
            )

            if not product:
                raise HTTPException(
                    status_code=404,
                    detail="Product not found",
                )

            product.is_featured = (
                not product.is_featured
            )

            await db.commit()

            await db.refresh(product)

            await ProductService.update_featured_products_cache(
                db
            )

            return product.to_dict()

    @staticmethod
    async def update_featured_products_cache(
            db: AsyncSession,
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
                ),
            )
            
    @staticmethod
    async def search_products(
            db: AsyncSession,
            query: str,
        ):

            query = query.strip()

            result = await db.execute(

                    select(Product)

                    .where(

                        or_(

                            Product.name.ilike(
                                f"%{query}%"
                            ),

                            Product.category.ilike(
                                f"%{query}%"
                            ),

                            Product.brand.ilike(
                                f"%{query}%"
                            ),

                            Product.description.ilike(
                                f"%{query}%"
                            ),

                        )

                    )

                    .order_by(

                        case(

                            (
                                Product.name.ilike(
                                    f"{query}%"
                                ),
                                0,
                            ),

                            (
                                Product.category.ilike(
                                    f"{query}%"
                                ),
                                1,
                            ),

                            (
                                Product.brand.ilike(
                                    f"{query}%"
                                ),
                                2,
                            ),

                            else_=3,

                        ),

                        Product.name.asc(),

                    )

                )

            products = result.scalars().all()

            return {

                    "products": [

                        product.to_dict()

                        for product in products

                    ]

                }

    @staticmethod
    async def get_product_details(
            db: AsyncSession,
            product_id: int,
    ):

                product = await db.get(
                    Product,
                    product_id,
                )

                if not product:

                    raise HTTPException(
                        status_code=404,
                        detail="Product not found",
                    )

                return {

                    "product": product.to_dict()

                }

    @staticmethod
    async def get_products_by_category(
                db: AsyncSession,
                category: str,
    ):

                result = await db.execute(

                    select(Product).where(

                        Product.category == category

                    )

                )

                products = result.scalars().all()

                return {

                    "products": [

                        product.to_dict()

                        for product in products

                    ]

                }

    @staticmethod
    async def get_recommended_products(
                db: AsyncSession,
    ):

                result = await db.execute(
                    select(Product)
                )

                products = result.scalars().all()

                random.shuffle(products)

                return [

                    product.to_dict()

                    for product in products[:4]

                ]
                
    @staticmethod
    async def create_product(
                    db: AsyncSession,
                    name: str,
                    description: str,
                    price: float,
                    image: str,
                    category: str,
                    brand: str,
                    stock: int,
                    specifications: dict,
                ):

                    product = Product(
                        name=name,
                        description=description,
                        price=price,
                        image=image,
                        category=category,
                        brand=brand,
                        stock=stock,
                        specifications=specifications,
                    )

                    db.add(product)

                    await db.commit()

                    await db.refresh(product)

                    return product.to_dict()

    @staticmethod
    async def delete_product(
                    db: AsyncSession,
                    product_id: int,
                ):

                    product = await db.get(
                        Product,
                        product_id,
                    )

                    if not product:

                        raise HTTPException(
                            status_code=404,
                            detail="Product not found",
                        )

                    if product.image:

                        try:

                            public_id = (
                                product.image
                                .split("/")[-1]
                                .split(".")[0]
                            )

                            cloudinary.uploader.destroy(
                                f"products/{public_id}"
                            )

                        except Exception:
                            pass

                    await db.delete(product)

                    await db.commit()

                    await ProductService.update_featured_products_cache(
                        db
                    )

                    return {
                        "message": "Product deleted successfully"
                    }

    @staticmethod
    async def get_inventory_stats(
                    db: AsyncSession,
                ):

                    result = await db.execute(
                        select(Product)
                    )

                    products = result.scalars().all()

                    total_products = len(products)

                    total_stock = sum(
                        product.stock
                        for product in products
                    )

                    low_stock = sum(
                        1
                        for product in products
                        if 0 < product.stock <= 10
                    )

                    out_of_stock = sum(
                        1
                        for product in products
                        if product.stock == 0
                    )

                    return {
                        "totalProducts": total_products,
                        "totalStock": total_stock,
                        "lowStock": low_stock,
                        "outOfStock": out_of_stock,
                    }