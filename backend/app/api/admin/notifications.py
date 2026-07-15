from fastapi import APIRouter


router = APIRouter(
    prefix="/admin/notifications",
    tags=["Admin Notifications"]
)


@router.get("")
async def get_notifications():

    return {
        "notifications": []
    }



@router.get("/alerts")
async def get_alerts():

    return {
        "alerts": []
    }