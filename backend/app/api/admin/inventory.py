from fastapi import APIRouter


router = APIRouter(
    prefix="/admin/inventory",
    tags=["Admin Inventory"]
)


@router.get("")
async def get_inventory():

    return {
        "products": [],
        "totalStock": 0
    }



@router.get("/low-stock")
async def low_stock_products():

    return {
        "products": []
    }



@router.patch("/{product_id}")
async def update_stock(
    product_id: int,
    data: dict
):

    return {
        "message": "Estoque atualizado",
        "productId": product_id,
        "quantity": data.get("quantity")
    }