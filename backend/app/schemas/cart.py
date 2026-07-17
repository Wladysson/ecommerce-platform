from pydantic import BaseModel


class AddToCartRequest(BaseModel):
    product_id: int


class UpdateCartRequest(BaseModel):
    quantity: int
