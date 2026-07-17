from datetime import datetime
from decimal import Decimal

from sqlalchemy import Boolean, DateTime, Integer, JSON, Numeric, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.models.base import Base


class Product(Base):

    __tablename__ = "products"

    id: Mapped[int] = mapped_column(
        Integer,
        primary_key=True,
        autoincrement=True,
    )

    name: Mapped[str] = mapped_column(
        String(255),
        nullable=False,
    )

    description: Mapped[str] = mapped_column(
        Text,
        nullable=False,
    )

    price: Mapped[Decimal] = mapped_column(
        Numeric(10, 2),
        nullable=False,
    )

    image: Mapped[str] = mapped_column(
        String(500),
        nullable=False,
    )

    category: Mapped[str] = mapped_column(
        String(100),
        index=True,
        nullable=False,
    )

    brand: Mapped[str] = mapped_column(
        String(120),
        default="",
        nullable=False,
    )

    stock: Mapped[int] = mapped_column(
        Integer,
        default=0,
        nullable=False,
    )

    specifications: Mapped[dict] = mapped_column(
        JSON,
        default=dict,
        nullable=False,
    )

    is_featured: Mapped[bool] = mapped_column(
        Boolean,
        default=False,
        nullable=False,
    )

    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        nullable=False,
    )

    updated_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
        nullable=False,
    )

    order_items = relationship(
        "OrderItem",
        back_populates="product",
        cascade="all, delete-orphan",
    )

    cart_items = relationship(
        "CartItem",
        back_populates="product",
        cascade="all, delete-orphan",
    )

    @property
    def inventory_status(self) -> str:
        if self.stock == 0:
            return "out_of_stock"

        if self.stock <= 10:
            return "low_stock"

        return "in_stock"

    def to_dict(self):

        return {
            "id": self.id,
            "name": self.name,
            "description": self.description,
            "price": float(self.price),
            "image": self.image,
            "category": self.category,
            "brand": self.brand,
            "stock": self.stock,
            "status": self.inventory_status,
            "specifications": self.specifications,
            "isFeatured": self.is_featured,
            "createdAt": self.created_at.isoformat(),
            "updatedAt": self.updated_at.isoformat(),
        }