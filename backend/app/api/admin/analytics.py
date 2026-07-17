from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.database import get_db
from app.services.analytics_service import AnalyticsService


router = APIRouter(
    prefix="/admin/analytics",
    tags=["Admin Analytics"]
)


@router.get("")
async def get_analytics(
    period: str = "30days",
    db: AsyncSession = Depends(get_db),
):

    analytics = await AnalyticsService.get_analytics_data(
        db
    )


    return {
        "period": period,

        "metrics": {

            "users": {
                "value": analytics["users"],
                "growth": 0
            },

            "products": {
                "value": analytics["products"],
                "growth": 0
            },

            "sales": {
                "value": analytics["orders"],
                "growth": 0
            },

            "revenue": {
                "value": analytics["revenue"],
                "growth": 0
            }

        },

        "dashboard": analytics,

        "sales": [],

        "revenue": []
    }