import { motion } from "framer-motion";
import { useCartStore } from "../stores/useCartStore";
import { Link } from "react-router-dom";
import { MoveRight, ShoppingBag, TicketPercent, Truck, ShieldCheck } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "../lib/axios";

const stripePromise = loadStripe(
	"pk_test_51KZYccCoOZF2UhtOwdXQl3vcizup20zqKqT9hVUIsVzsdBrhqbUI2fE0ZdEVLdZfeHjeyFXtqaNsyCJCmZWnjNZa00PzMAjlcL"
);

const OrderSummary = () => {
	const { total, subtotal, coupon, isCouponApplied, cart } = useCartStore();

	const savings = subtotal - total;

	const handlePayment = async () => {
		const stripe = await stripePromise;

		const res = await axios.post("/payments/create-checkout-session", {
			products: cart,
			couponCode: coupon ? coupon.code : null,
		});

		const session = res.data;

		const result = await stripe.redirectToCheckout({
			sessionId: session.id,
		});

		if (result.error) {
			console.error(result.error);
		}
	};

	return (
		<motion.div
			className="rounded-2xl border border-gray-700 bg-gray-800 p-5 shadow-lg"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
		>
			<div className="mb-5 flex items-center justify-between">
				<div>
					<h2 className="text-xl font-semibold text-white">
						Resumo do Pedido
					</h2>

					<p className="text-sm text-gray-400">
						{cart.length} {cart.length === 1 ? "item" : "itens"} no carrinho
					</p>
				</div>

				<div className="rounded-full bg-emerald-500/10 p-2">
					<ShoppingBag className="text-emerald-400" size={20} />
				</div>
			</div>

			<div className="space-y-3">

				<div className="flex justify-between text-gray-300">
					<span>Subtotal</span>
					<span className="font-medium text-white">
						${subtotal.toFixed(2)}
					</span>
				</div>

				<div className="flex justify-between text-gray-300">
					<div className="flex items-center gap-2">
						<Truck size={16} />
						<span>Frete</span>
					</div>

					<span className="font-medium text-emerald-400">
						Grátis
					</span>
				</div>

				{savings > 0 && (
					<div className="flex justify-between">
						<div className="flex items-center gap-2 text-gray-300">
							<TicketPercent size={16} />
							<span>Desconto</span>
						</div>

						<span className="font-semibold text-emerald-400">
							-${savings.toFixed(2)}
						</span>
					</div>
				)}

				{coupon && isCouponApplied && (
					<div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-3">
						<div className="flex items-center justify-between">
							<span className="text-sm text-emerald-300">
								Cupom aplicado
							</span>

							<span className="rounded-full bg-emerald-500 px-2 py-1 text-xs font-semibold text-white">
								{coupon.code}
							</span>
						</div>

						<p className="mt-1 text-xs text-emerald-400">
							{coupon.discountPercentage}% de desconto
						</p>
					</div>
				)}

				<hr className="border-gray-700" />

				<div className="flex items-center justify-between">
					<div>
						<p className="text-lg font-semibold text-white">
							Total
						</p>

						<p className="text-xs text-gray-400">
							Impostos inclusos
						</p>
					</div>

					<p className="text-2xl font-bold text-emerald-400">
						${total.toFixed(2)}
					</p>
				</div>

				<motion.button
					className="mt-4 flex w-full items-center justify-center rounded-xl bg-emerald-600 py-3 font-semibold text-white transition hover:bg-emerald-700"
					whileHover={{ scale: 1.02 }}
					whileTap={{ scale: 0.98 }}
					onClick={handlePayment}
				>
					Finalizar Compra
				</motion.button>

				<div className="flex items-center justify-center gap-2 text-xs text-gray-400">
					<ShieldCheck size={15} className="text-emerald-400" />
					<span>Pagamento protegido e criptografado</span>
				</div>

				<div className="flex items-center justify-center gap-2 pt-2">
					<span className="text-sm text-gray-500">ou</span>

					<Link
						to="/"
						className="inline-flex items-center gap-2 text-sm font-medium text-emerald-400 transition hover:text-emerald-300"
					>
						Continuar Comprando
						<MoveRight size={16} />
					</Link>
				</div>
			</div>
		</motion.div>
	);
};

export default OrderSummary;