from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.database import get_db
from app.db.models.user import User
from app.core.dependencies import get_admin_user
from app.services.admin_service import AdminService
from app.schemas.admin import AdminDashboardResponse


router = APIRouter(
    prefix="/admin",
    tags=["Admin"],
)


@router.get(
    "/dashboard",
    response_model=AdminDashboardResponse
)
async def dashboard(
    db: AsyncSession = Depends(get_db),
    current_user: User = Depends(get_admin_user),
):

    return await AdminService.get_dashboard(db)