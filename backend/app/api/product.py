from fastapi import APIRouter, Depends, Query
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.dependencies import get_admin_user
from app.db.database import get_db
from app.db.models.user import User
from app.schemas.product import ProductCreateRequest
from app.services.product_service import ProductService

router = APIRouter(
    prefix="/products",
    tags=["Products"],
)


@router.get("/")
async def get_all_products(
    admin: User = Depends(get_admin_user),
    db: AsyncSession = Depends(get_db),
):
    return await ProductService.get_all_products(db)


@router.get("/featured")
async def get_featured_products(
    db: AsyncSession = Depends(get_db),
):
    return await ProductService.get_featured_products(db)


@router.get("/category/{category}")
async def get_products_by_category(
    category: str,
    db: AsyncSession = Depends(get_db),
):
    return await ProductService.get_products_by_category(
        db=db,
        category=category,
    )
    
@router.get("/search")
async def search_products(
    query: str = Query(..., min_length=1, max_length=100),
    db: AsyncSession = Depends(get_db),
):
    return await ProductService.search_products(
        db=db,
        query=query.strip(),
    )


@router.get("/recommendations")
async def get_recommended_products(
    db: AsyncSession = Depends(get_db),
):
    return await ProductService.get_recommended_products(db)

@router.get("/{product_id}")
async def get_product_details(
    product_id: int,
    db: AsyncSession = Depends(get_db),
):
    return await ProductService.get_product_details(
        db=db,
        product_id=product_id,
    )


@router.post("/", status_code=201)
async def create_product(
    data: ProductCreateRequest,
    admin: User = Depends(get_admin_user),
    db: AsyncSession = Depends(get_db),
):
    return await ProductService.create_product(
        db=db,
        name=data.name,
        description=data.description,
        price=data.price,
        image=data.image,
        category=data.category,
    )


@router.patch("/{product_id}")
async def toggle_featured_product(
    product_id: int,
    admin: User = Depends(get_admin_user),
    db: AsyncSession = Depends(get_db),
):
    return await ProductService.toggle_featured_product(
        db=db,
        product_id=product_id,
    )


@router.delete("/{product_id}")
async def delete_product(
    product_id: int,
    admin: User = Depends(get_admin_user),
    db: AsyncSession = Depends(get_db),
):
    return await ProductService.delete_product(
        db=db,
        product_id=product_id,
    )