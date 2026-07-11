from pydantic import BaseModel


class ValidateCouponRequest(BaseModel):
    code: str
