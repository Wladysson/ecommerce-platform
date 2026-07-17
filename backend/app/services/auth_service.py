from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from fastapi import HTTPException, Response, Request, status
from jose import JWTError

from app.db.models.user import User
from app.db.redis import redis_client
from app.core.security import (
    create_access_token,
    create_refresh_token,
    verify_password,
    hash_password,
    verify_refresh_token,
)


class AuthService:

    @staticmethod
    async def signup(db: AsyncSession, response: Response, name: str, email: str, password: str):

        stmt = select(User).where(User.email == email)
        result = await db.execute(stmt)
        existing_user = result.scalar_one_or_none()

        if existing_user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="User already exists"
            )

        user = User(
            name=name,
            email=email,
            password=hash_password(password)
        )

        db.add(user)
        await db.commit()
        await db.refresh(user)

        access_token = create_access_token(user.id)
        refresh_token = create_refresh_token(user.id)

        await redis_client.setex(
            f"refresh_token:{user.id}",
            60 * 60 * 24 * 7,
            refresh_token
        )

        AuthService.set_auth_cookies(
            response,
            access_token,
            refresh_token
        )

        return {
            "_id": user.id,
            "name": user.name,
            "email": user.email,
            "role": user.role
        }

    @staticmethod
    async def login(db: AsyncSession, response: Response, email: str, password: str):

        stmt = select(User).where(User.email == email)
        result = await db.execute(stmt)
        user = result.scalar_one_or_none()

        if not user:
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid email or password"
            )

        if not verify_password(password, user.password):
            raise HTTPException(
                status_code=status.HTTP_400_BAD_REQUEST,
                detail="Invalid email or password"
            )

        access_token = create_access_token(user.id)
        refresh_token = create_refresh_token(user.id)

        await redis_client.setex(
            f"refresh_token:{user.id}",
            60 * 60 * 24 * 7,
            refresh_token
        )

        AuthService.set_auth_cookies(
            response,
            access_token,
            refresh_token
        )

        return {
            "_id": user.id,
            "name": user.name,
            "email": user.email,
            "role": user.role
        }

    @staticmethod
    async def logout(request: Request, response: Response):

        refresh_token = request.cookies.get("refreshToken")

        if refresh_token:

            try:

                payload = verify_refresh_token(refresh_token)

                user_id = payload["user_id"]

                await redis_client.delete(
                    f"refresh_token:{user_id}"
                )

            except JWTError:
                pass

        response.delete_cookie("accessToken")
        response.delete_cookie("refreshToken")

        return {
            "message": "Logged out successfully"
        }

    @staticmethod
    async def refresh_token(request: Request, response: Response):

        refresh_token = request.cookies.get("refreshToken")

        if not refresh_token:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="No refresh token provided"
            )

        payload = verify_refresh_token(refresh_token)

        user_id = payload["user_id"]

        stored_token = await redis_client.get(
            f"refresh_token:{user_id}"
        )

        if stored_token != refresh_token:
            raise HTTPException(
                status_code=status.HTTP_401_UNAUTHORIZED,
                detail="Invalid refresh token"
            )

        access_token = create_access_token(user_id)

        response.set_cookie(
            key="accessToken",
            value=access_token,
            httponly=True,
            secure=False,
            samesite="strict",
            max_age=60 * 15
        )

        return {
            "message": "Token refreshed successfully"
        }

    @staticmethod
    async def get_profile(current_user: User):

        return {
            "_id": current_user.id,
            "name": current_user.name,
            "email": current_user.email,
            "role": current_user.role
        }

    @staticmethod
    def set_auth_cookies(
        response: Response,
        access_token: str,
        refresh_token: str
    ):

        response.set_cookie(
            key="accessToken",
            value=access_token,
            httponly=True,
            secure=False,
            samesite="strict",
            max_age=60 * 15
        )

        response.set_cookie(
            key="refreshToken",
            value=refresh_token,
            httponly=True,
            secure=False,
            samesite="strict",
            max_age=60 * 60 * 24 * 7
        )