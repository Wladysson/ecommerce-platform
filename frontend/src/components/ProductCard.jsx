import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
	const { user } = useUserStore();
	const { addToCart } = useCartStore();

	const price = Number(product.price);
	const installment = price / 12;

	const handleAddToCart = () => {
		if (!user) {
			toast.error("Please login to add products to cart", { id: "login" });
			return;
		}

		addToCart(product);
	};


	return (
		<div className='flex w-full relative flex-col overflow-hidden rounded-lg border border-gray-700 shadow-lg'>

			<div className='relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl'>

				<Link 
					to={`/products/${product.id}`}
					className="w-full"
				>

					<img
						className='object-cover w-full h-full cursor-pointer'
						src={product.image}
						alt={product.name}
					/>

				</Link>

				<div className='absolute inset-0 bg-black bg-opacity-20 pointer-events-none' />

			</div>


			<div className='mt-4 px-5 pb-5'>

				<h5 className='text-xl font-semibold tracking-tight text-white'>
					{product.name}
				</h5>


				<div className="mt-3 space-y-2">

					<p className='text-3xl font-bold text-emerald-400'>
						R$ {price.toFixed(2)}
					</p>


					<p className="text-sm text-gray-200">
						Em até 12x de R$ {installment.toFixed(2)} sem juros
					</p>


					<p className="text-sm text-emerald-300">
						R$ 20,00 off na primeira compra no app
					</p>


					<p className="text-sm text-gray-300">
						Entrega GRÁTIS: terça-feira, 28 de jul.
					</p>

				</div>


				<button
					className='
						mt-5
						flex
						items-center
						justify-center
						w-full
						rounded-lg
						bg-emerald-600
						px-5
						py-2.5
						text-center
						text-sm
						font-medium
						text-white
						hover:bg-emerald-700
						transition
						focus:outline-none
						focus:ring-4
						focus:ring-emerald-300
					'
					onClick={handleAddToCart}
				>

					<ShoppingCart size={22} className='mr-2' />

					Adicionar ao Carrinho

				</button>

			</div>

		</div>
	);
};

export default ProductCard;