from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.api.analytics import router as analytics_router
from app.api import admin
from app.api.auth import router as auth_router
from app.api.cart import router as cart_router
from app.api.coupon import router as coupon_router
from app.api.payment import router as payment_router
from app.api.product import router as product_router
from app.core.config import settings
from app.db.base import Base
from app.db.database import engine


@asynccontextmanager
async def lifespan(app: FastAPI):

    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)

    yield

    await engine.dispose()


app = FastAPI(
    title="E-Commerce API",
    version="1.0.0",
    lifespan=lifespan,
)

app.include_router(
    admin.router,
    prefix="/api"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router, prefix="/api")
app.include_router(product_router, prefix="/api")
app.include_router(cart_router, prefix="/api")
app.include_router(coupon_router, prefix="/api")
app.include_router(payment_router, prefix="/api")
app.include_router(analytics_router, prefix="/api")


# Caso deseje servir o frontend pelo FastAPI
# app.mount("/", StaticFiles(directory="../frontend/dist", html=True), name="frontend")
