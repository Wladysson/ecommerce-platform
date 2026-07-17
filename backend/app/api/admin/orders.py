from fastapi import APIRouter


router = APIRouter(
    prefix="/admin/orders",
    tags=["Admin Orders"]
)


@router.get("")
async def get_orders():

    return {
        "orders": [],
        "total": 0
    }



@router.patch("/{order_id}")
async def update_order_status(
    order_id: int,
    data: dict
):

    return {
        "message": "Status atualizado",
        "orderId": order_id,
        "status": data.get("status")
    }