import { ShoppingCart } from "lucide-react";
import { useCartStore } from "../../stores/useCartStore";


export default function AddToCartButton({ product }) {

    const addToCart = useCartStore(
        (state) => state.addToCart
    );


    function handleAddCart() {

        addToCart({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1,
        });

    }


    return (
        <button
            onClick={handleAddCart}
            className="
                w-full
                flex
                items-center
                justify-center
                gap-3
                bg-blue-600
                hover:bg-blue-700
                text-white
                font-semibold
                py-4
                rounded-xl
                transition
            "
        >

            <ShoppingCart size={22}/>

            Adicionar ao carrinho

        </button>
    );
}