import random

from .brands_data import BRANDS
from .categories_data import CATEGORIES
from .images_data import PRODUCT_IMAGES


PRODUCT_NAMES = {

    "Monitores": [
        "Monitor Gamer",
        "Monitor UltraWide",
        "Monitor IPS"
    ],

    "Computadores": [
        "PC Gamer",
        "Desktop Profissional",
        "Workstation"
    ],

    "Notebooks": [
        "Notebook Gamer",
        "Notebook Ultrafino",
        "Notebook Business"
    ],

    "Cadeiras": [
        "Cadeira Gamer",
        "Cadeira Ergonômica"
    ],

    "Smartphones": [
        "Smartphone Pro",
        "Celular 5G"
    ],

    "Placas de Video": [
        "Placa de Vídeo RTX",
        "GPU Gamer"
    ],

    "Armazenamento": [
        "SSD NVMe",
        "HD Externo"
    ],

    "Memorias": [
        "Memória RAM DDR5",
        "Memória RAM DDR4"
    ],

    "Roteadores": [
        "Roteador WiFi",
        "Roteador Mesh"
    ],

    "Impressoras": [
        "Impressora Multifuncional",
        "Impressora Laser"
    ],

    "Webcams": [
        "Webcam Full HD",
        "Webcam Streaming"
    ],

    "Acessorios": [
        "Mouse Gamer",
        "Teclado Mecânico",
        "Headset Gamer"
    ],
}


def generate_products(quantity=5000):

    products = []

    for index in range(1, quantity + 1):

        category = random.choice(
            CATEGORIES
        )["name"]

        brand = random.choice(
            BRANDS
        )

        product_name = random.choice(
            PRODUCT_NAMES[category]
        )

        products.append({

            "name": f"[SEED] {product_name} {brand} {index}",

            "description": (
                f"{product_name} da marca {brand}. "
                "Produto criado para teste do ecommerce."
            ),

            "price": round(
                random.uniform(80, 9000),
                2
            ),

            "image": random.choice(
                PRODUCT_IMAGES[category]
            ),

            "category": category,

            "brand": brand,

            "stock": random.randint(
                5,
                200
            ),

            "specifications": {},

            "is_featured": random.choice(
                [True, False]
            )
        })

    return products