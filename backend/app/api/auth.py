from fastapi import APIRouter, Depends, Response, Request
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.database import get_db
from app.schemas.auth import LoginRequest, SignupRequest
from app.services.auth_service import AuthService
from app.core.dependencies import get_current_user
from app.db.models.user import User

router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)


@router.post("/signup", status_code=201)
async def signup(
    data: SignupRequest,
    response: Response,
    db: AsyncSession = Depends(get_db),
):
    return await AuthService.signup(
        db=db,
        response=response,
        name=data.name,
        email=data.email,
        password=data.password,
    )


@router.post("/login")
async def login(
    data: LoginRequest,
    response: Response,
    db: AsyncSession = Depends(get_db),
):
    return await AuthService.login(
        db=db,
        response=response,
        email=data.email,
        password=data.password,
    )


@router.post("/logout")
async def logout(
    request: Request,
    response: Response,
):
    return await AuthService.logout(
        request=request,
        response=response,
    )


@router.post("/refresh-token")
async def refresh_token(
    request: Request,
    response: Response,
):
    return await AuthService.refresh_token(
        request=request,
        response=response,
    )


@router.get("/profile")
async def get_profile(
    current_user: User = Depends(get_current_user),
):
    return await AuthService.get_profile(current_user)