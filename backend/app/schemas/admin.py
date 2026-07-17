from pydantic import BaseModel


class AdminDashboardResponse(BaseModel):
    total_users: int
    total_products: int
    total_orders: int