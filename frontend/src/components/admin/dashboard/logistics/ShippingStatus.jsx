import { motion } from "framer-motion";


const ShippingStatus = ({ orders = [] }) => {

	return (
		<motion.div
			className="rounded-xl border border-gray-700 bg-gray-800 p-6"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>

			<h2 className="mb-5 text-xl font-semibold text-white">
				Status das Entregas
			</h2>


			<div className="space-y-4">

				{orders.map((order)=>(
					<div
						key={order.id}
						className="flex items-center justify-between 
						rounded-lg bg-gray-700/50 p-4"
					>

						<div>

							<p className="font-medium text-white">
								Pedido #{order.id}
							</p>

							<p className="text-sm text-gray-400">
								{order.customer}
							</p>

						</div>


						<span
							className={`
							rounded-full px-3 py-1 text-xs font-semibold
							${
								order.status === "Entregue"
								? "bg-emerald-500/20 text-emerald-400"
								:
								order.status === "Atrasado"
								? "bg-red-500/20 text-red-400"
								:
								"bg-blue-500/20 text-blue-400"
							}
							`}
						>
							{order.status}
						</span>

					</div>
				))}

			</div>


		</motion.div>
	);
};


export default ShippingStatus;