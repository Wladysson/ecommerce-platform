from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

from app.api.analytics import router as analytics_router
from app.api.auth import router as auth_router
from app.api.cart import router as cart_router
from app.api.coupon import router as coupon_router
from app.api.payment import router as payment_router
from app.api.product import router as product_router

from app.api.admin.analytics import router as admin_analytics_router
from app.api.admin.dashboard import router as admin_dashboard_router
from app.api.admin.products import router as admin_products_router
from app.api.admin.orders import router as admin_orders_router
from app.api.admin.customers import router as admin_customers_router
from app.api.admin.inventory import router as admin_inventory_router
from app.api.admin.notifications import router as admin_notifications_router

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



# Analytics antigo
app.include_router(
    analytics_router,
    prefix="/api"
)



# Admin Dashboard
app.include_router(
    admin_analytics_router,
    prefix="/api"
)

app.include_router(
    admin_dashboard_router,
    prefix="/api"
)

app.include_router(
    admin_products_router,
    prefix="/api"
)

app.include_router(
    admin_orders_router,
    prefix="/api"
)

app.include_router(
    admin_customers_router,
    prefix="/api"
)

app.include_router(
    admin_inventory_router,
    prefix="/api"
)

app.include_router(
    admin_notifications_router,
    prefix="/api"
)



# app.mount("/", StaticFiles(directory="../frontend/dist", html=True), name="frontend")
