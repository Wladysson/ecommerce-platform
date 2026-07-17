import { motion } from "framer-motion";
import {
	ShoppingBag,
} from "lucide-react";


const RecentOrders = ({ orders = [] }) => {

	return (
		<motion.div
			className="rounded-xl border border-gray-700 bg-gray-800 p-6"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
		>

			<div className="mb-5 flex items-center gap-3">

				<ShoppingBag
					className="text-emerald-400"
					size={24}
				/>

				<h2 className="text-xl font-semibold text-white">
					Últimos Pedidos
				</h2>

			</div>


			<div className="space-y-3">

				{orders.length === 0 && (
					<p className="text-sm text-gray-400">
						Nenhum pedido encontrado
					</p>
				)}


				{orders.map((order)=>(
					<div
						key={order.id}
						className="flex items-center justify-between 
						rounded-lg bg-gray-700/50 p-4"
					>

						<div>

							<p className="font-semibold text-white">
								#{order.id}
							</p>

							<p className="text-sm text-gray-400">
								{order.customer}
							</p>

						</div>


						<div className="text-right">

							<p className="font-semibold text-emerald-400">
								R$ {order.value}
							</p>

							<p className="text-xs text-gray-500">
								{order.date}
							</p>

						</div>

					</div>
				))}

			</div>

		</motion.div>
	);
};


export default RecentOrders;