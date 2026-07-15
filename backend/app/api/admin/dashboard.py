from fastapi import APIRouter


router = APIRouter(
    prefix="/admin/dashboard",
    tags=["Admin Dashboard"]
)


@router.get("")
async def get_dashboard():

    return {
        "metrics": {
            "users": 0,
            "products": 0,
            "sales": 0,
            "revenue": 0
        },
        "revenueChart": [],
        "topProducts": [],
        "categories": [],
        "recentOrders": [],
        "recentCustomers": []
    }