from datetime import datetime, timedelta, timezone

from jose import JWTError, jwt
from passlib.context import CryptContext

from app.core.config import settings


ALGORITHM = "HS256"
pwd_context = CryptContext(
    schemes=["bcrypt"],
    deprecated="auto"
)


def hash_password(password: str):
    return pwd_context.hash(password[:72])


def verify_password(password: str, hashed_password: str):
    return pwd_context.verify(password[:72], hashed_password)


def create_access_token(user_id: str):
    expire = datetime.now(timezone.utc) + timedelta(minutes=settings.access_token_expire_minutes)

    payload = {
        "user_id": str(user_id),
        "exp": expire,
    }

    return jwt.encode(payload, settings.ACCESS_TOKEN_SECRET, algorithm=ALGORITHM)


def create_refresh_token(user_id: str):
    expire = datetime.now(timezone.utc) + timedelta(days=settings.refresh_token_expire_days)

    payload = {
        "user_id": str(user_id),
        "exp": expire,
    }

    return jwt.encode(payload, settings.REFRESH_TOKEN_SECRET, algorithm=ALGORITHM)


def verify_access_token(token: str):
    try:
        return jwt.decode(token, settings.ACCESS_TOKEN_SECRET, algorithms=[ALGORITHM])
    except JWTError:
        return None


def verify_refresh_token(token: str):
    try:
        return jwt.decode(token, settings.REFRESH_TOKEN_SECRET, algorithms=[ALGORITHM])
    except JWTError:
        return None