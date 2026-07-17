from typing import Any

from pydantic import BaseModel, ConfigDict


class ProductCreateRequest(BaseModel):
    name: str
    description: str
    price: float
    image: str
    category: str
    brand: str
    stock: int
    specifications: dict[str, Any] = {}


class ProductUpdate(BaseModel):
    name: str | None = None
    description: str | None = None
    price: float | None = None
    image: str | None = None
    category: str | None = None
    brand: str | None = None
    stock: int | None = None
    specifications: dict[str, Any] | None = None


class ProductResponse(BaseModel):
    id: int
    name: str
    description: str
    price: float
    image: str
    category: str
    brand: str
    stock: int
    is_featured: bool
    specifications: dict[str, Any]

    model_config = ConfigDict(from_attributes=True)