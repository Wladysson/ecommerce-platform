import { motion } from "framer-motion";


const OrderTable = ({ orders = [] }) => {


	return (
		<motion.div
			className="overflow-hidden rounded-xl border border-gray-700 bg-gray-800"
			initial={{opacity:0}}
			animate={{opacity:1}}
		>

			<div className="border-b border-gray-700 p-6">

				<h2 className="text-xl font-semibold text-white">
					Gerenciamento de Pedidos
				</h2>

			</div>


			<div className="overflow-x-auto">

				<table className="w-full text-left">

					<thead className="bg-gray-700">

						<tr>

							<th className="px-6 py-3 text-sm text-gray-300">
								Pedido
							</th>

							<th className="px-6 py-3 text-sm text-gray-300">
								Cliente
							</th>

							<th className="px-6 py-3 text-sm text-gray-300">
								Valor
							</th>

							<th className="px-6 py-3 text-sm text-gray-300">
								Status
							</th>

						</tr>

					</thead>


					<tbody>

						{orders.map((order)=>(
							<tr
								key={order.id}
								className="border-t border-gray-700"
							>

								<td className="px-6 py-4 text-white">
									#{order.id}
								</td>


								<td className="px-6 py-4 text-gray-300">
									{order.customer}
								</td>


								<td className="px-6 py-4 text-emerald-400">
									R$ {order.value}
								</td>


								<td className="px-6 py-4">

									<span
										className="
										rounded-full bg-emerald-500/20
										px-3 py-1 text-xs text-emerald-400
										"
									>
										{order.status}
									</span>

								</td>

							</tr>
						))}

					</tbody>

				</table>

			</div>

		</motion.div>
	);
};


export default OrderTable;