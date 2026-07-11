from datetime import date, timedelta

from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.dependencies import get_admin_user
from app.db.database import get_db
from app.db.models.user import User
from app.services.analytics_service import AnalyticsService

router = APIRouter(
    prefix="/analytics",
    tags=["Analytics"],
)


@router.get("/")
async def get_analytics(
    current_user: User = Depends(get_admin_user),
    db: AsyncSession = Depends(get_db),
):

    end_date = date.today()

    start_date = end_date - timedelta(days=7)

    analytics_data = await AnalyticsService.get_analytics_data(
        db
    )

    daily_sales_data = await AnalyticsService.get_daily_sales_data(
        db,
        start_date,
        end_date,
    )

    return {
        "analyticsData": analytics_data,
        "dailySalesData": daily_sales_data,
    }