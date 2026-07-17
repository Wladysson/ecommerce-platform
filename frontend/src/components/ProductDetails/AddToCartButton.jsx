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
                bg-emerald-600
                hover:bg-emerald-500
                text-white
                font-semibold
                h-12
                px-4
                rounded-lg
                transition-colors
                duration-300
            "
        >

            <ShoppingCart size={21}/>

            Adicionar ao carrinho

        </button>
    );
}