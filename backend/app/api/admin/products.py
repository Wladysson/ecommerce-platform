from fastapi import APIRouter


router = APIRouter(
    prefix="/admin/products",
    tags=["Admin Products"]
)


@router.get("")
async def get_products():

    return {
        "products": [],
        "total": 0
    }



@router.post("")
async def create_product(product: dict):

    return {
        "message": "Produto criado com sucesso",
        "product": product
    }



@router.put("/{product_id}")
async def update_product(
    product_id: int,
    product: dict
):

    return {
        "message": "Produto atualizado",
        "id": product_id,
        "product": product
    }



@router.delete("/{product_id}")
async def delete_product(
    product_id: int
):

    return {
        "message": "Produto removido",
        "id": product_id
    }