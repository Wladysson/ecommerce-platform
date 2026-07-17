from fastapi import APIRouter


router = APIRouter(
    prefix="/admin/customers",
    tags=["Admin Customers"]
)


@router.get("")
async def get_customers():

    return {
        "customers": [],
        "total": 0
    }



@router.get("/analytics")
async def customer_analytics():

    return {
        "newCustomers": 0,
        "activeCustomers": 0,
        "growth": 0
    }