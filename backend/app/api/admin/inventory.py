from fastapi import APIRouter, Depends, Query
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.dependencies import get_db
from app.schemas.product import ProductUpdate
from app.services.product_service import ProductService

router = APIRouter(
    prefix="/admin/inventory",
    tags=["Admin Inventory"],
)


@router.get("")
async def get_inventory(
    search: str | None = Query(default=None),
    category: str | None = Query(default=None),
    status: str | None = Query(default=None),
    db: AsyncSession = Depends(get_db),
):

    return await ProductService.get_inventory(
        db=db,
        search=search,
        category=category,
        status=status,
    )


@router.get("/{product_id}")
async def get_product(
    product_id: int,
    db: AsyncSession = Depends(get_db),
):

    return await ProductService.get_product(
        db=db,
        product_id=product_id,
    )


@router.put("/{product_id}")
async def update_product(
    product_id: int,
    payload: ProductUpdate,
    db: AsyncSession = Depends(get_db),
):

    return await ProductService.update_product(
        db=db,
        product_id=product_id,
        payload=payload,
    )


@router.get("/stats/summary")
async def get_inventory_stats(
    db: AsyncSession = Depends(get_db),
):

    return await ProductService.get_inventory_stats(
        db=db,
    )