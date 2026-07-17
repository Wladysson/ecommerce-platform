import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import {
	Gift,
	CheckCircle2,
	Tag,
	TicketPercent,
	XCircle,
} from "lucide-react";
import { useCartStore } from "../stores/useCartStore";

const GiftCouponCard = () => {
	const [userInputCode, setUserInputCode] = useState("");

	const {
		coupon,
		isCouponApplied,
		applyCoupon,
		getMyCoupon,
		removeCoupon,
	} = useCartStore();

	useEffect(() => {
		getMyCoupon();
	}, [getMyCoupon]);

	useEffect(() => {
		if (coupon) {
			setUserInputCode(coupon.code);
		}
	}, [coupon]);

	const handleApplyCoupon = () => {
		if (!userInputCode.trim()) return;
		applyCoupon(userInputCode);
	};

	const handleRemoveCoupon = async () => {
		await removeCoupon();
		setUserInputCode("");
	};

	return (
		<motion.div
			className="rounded-2xl border border-gray-700 bg-gray-800 p-5 shadow-lg"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5, delay: 0.2 }}
		>
			<div className="flex items-start justify-between">
				<div>
					<h2 className="text-xl font-semibold text-white">
						Cupons & Gift Cards
					</h2>

					<p className="mt-1 text-sm text-gray-400">
						Adicione um cupom de desconto ou utilize um cartão presente.
					</p>
				</div>

				<div className="rounded-full bg-emerald-500/10 p-2">
					<Gift
						size={22}
						className="text-emerald-400"
					/>
				</div>
			</div>

			<div className="mt-5 flex gap-2">
				<input
					type="text"
					value={userInputCode}
					onChange={(e) => setUserInputCode(e.target.value)}
					placeholder="Digite seu cupom"
					className="
						flex-1
						rounded-xl
						border
						border-gray-600
						bg-gray-700
						px-4
						py-3
						text-sm
						text-white
						placeholder:text-gray-500
						focus:border-emerald-500
						focus:ring-emerald-500
					"
				/>

				<motion.button
					type="button"
					onClick={handleApplyCoupon}
					whileHover={{ scale: 1.03 }}
					whileTap={{ scale: 0.97 }}
					className="
						rounded-xl
						bg-emerald-600
						px-5
						text-sm
						font-semibold
						text-white
						hover:bg-emerald-700
					"
				>
					Aplicar
				</motion.button>
			</div>

			{isCouponApplied && coupon && (
				<div className="mt-5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-3">
							<CheckCircle2
								size={20}
								className="text-emerald-400"
							/>

							<div>
								<p className="font-medium text-white">
									Cupom aplicado
								</p>

								<p className="text-sm text-gray-400">
									{coupon.code}
								</p>
							</div>
						</div>

						<div className="rounded-full bg-emerald-500 px-3 py-1 text-xs font-semibold text-white">
							-{coupon.discountPercentage}%
						</div>
					</div>

					<motion.button
						type="button"
						onClick={handleRemoveCoupon}
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className="
							mt-4
							flex
							w-full
							items-center
							justify-center
							gap-2
							rounded-lg
							bg-red-600
							py-2.5
							text-sm
							font-medium
							text-white
							hover:bg-red-700
						"
					>
						<XCircle size={16} />
						Remover Cupom
					</motion.button>
				</div>
			)}

			{coupon && !isCouponApplied && (
				<div className="mt-5 rounded-xl border border-blue-500/20 bg-blue-500/5 p-4">
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-3">
							<Tag
								size={20}
								className="text-blue-400"
							/>

							<div>
								<p className="font-medium text-white">
									Cupom disponível
								</p>

								<p className="text-sm text-gray-400">
									{coupon.code}
								</p>
							</div>
						</div>

						<div className="rounded-full bg-blue-500 px-3 py-1 text-xs font-semibold text-white">
							-{coupon.discountPercentage}%
						</div>
					</div>
				</div>
			)}

			<div className="mt-5 flex items-start gap-2 border-t border-gray-700 pt-4">
				<TicketPercent
					size={18}
					className="mt-0.5 text-emerald-400"
				/>

				<p className="text-xs leading-relaxed text-gray-400">
					Os descontos são aplicados automaticamente ao valor final da
					compra durante o checkout. Apenas um cupom pode ser utilizado
					por pedido.
				</p>
			</div>
		</motion.div>
	);
};

export default GiftCouponCard;