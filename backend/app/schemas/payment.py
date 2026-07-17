from pydantic import BaseModel


class CheckoutRequest(BaseModel):
    products: list[dict]
    coupon_code: str | None = None


class CheckoutSuccessRequest(BaseModel):
    session_id: str
