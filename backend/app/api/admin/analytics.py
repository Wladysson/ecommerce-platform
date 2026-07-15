from fastapi import APIRouter


router = APIRouter(
    prefix="/admin/analytics",
    tags=["Admin Analytics"]
)


@router.get("")
async def get_analytics(
    period: str = "30days"
):

    return {
        "period": period,

        "metrics": {
            "users": {
                "value": 0,
                "growth": 0
            },
            "products": {
                "value": 0,
                "growth": 0
            },
            "sales": {
                "value": 0,
                "growth": 0
            },
            "revenue": {
                "value": 0,
                "growth": 0
            }
        },

        "sales": [],
        "revenue": []
    }