from pydantic import BaseModel


class ProductCreateRequest(BaseModel):
    name: str
    description: str
    price: float
    image: str
    category: str
