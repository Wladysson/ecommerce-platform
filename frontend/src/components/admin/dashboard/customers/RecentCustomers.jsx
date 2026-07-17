import { motion } from "framer-motion";


const RecentCustomers = ({ customers = [] }) => {


	return (
		<motion.div
			className="rounded-xl border border-gray-700 bg-gray-800 p-6"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>

			<h2 className="mb-5 text-xl font-semibold text-white">
				Clientes Recentes
			</h2>


			<div className="space-y-3">

				{customers.map((customer)=>(
					<div
						key={customer.id}
						className="flex items-center justify-between 
						rounded-lg bg-gray-700/50 p-4"
					>

						<div>

							<p className="font-medium text-white">
								{customer.name}
							</p>

							<p className="text-sm text-gray-400">
								{customer.email}
							</p>

						</div>


						<div className="text-right">

							<p className="text-sm text-emerald-400">
								{customer.orders || 0} pedidos
							</p>

							<p className="text-xs text-gray-500">
								{customer.date}
							</p>

						</div>

					</div>
				))}

			</div>

		</motion.div>
	);
};


export default RecentCustomers;