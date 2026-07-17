import { motion } from "framer-motion";
import {
	ShoppingCart,
	Users,
	Percent,
	TrendingUp,
} from "lucide-react";


const SalesPerformance = ({ sales = {} }) => {

	const stats = [
		{
			title: "Pedidos",
			value: sales.orders || 0,
			icon: ShoppingCart,
		},
		{
			title: "Clientes Ativos",
			value: sales.activeCustomers || 0,
			icon: Users,
		},
		{
			title: "Conversão",
			value: `${sales.conversion || 0}%`,
			icon: Percent,
		},
		{
			title: "Crescimento",
			value: `${sales.growth || 0}%`,
			icon: TrendingUp,
		},
	];


	return (
		<motion.div
			className="rounded-xl border border-gray-700 bg-gray-800 p-6"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
		>

			<h2 className="mb-5 text-xl font-semibold text-white">
				Performance de Vendas
			</h2>


			<div className="grid grid-cols-2 gap-4">

				{stats.map((item) => (
					<div
						key={item.title}
						className="rounded-lg bg-gray-700/50 p-4"
					>

						<div className="mb-3 flex items-center justify-between">

							<span className="text-sm text-gray-400">
								{item.title}
							</span>

							<item.icon
								size={20}
								className="text-emerald-400"
							/>

						</div>


						<strong className="text-2xl text-white">
							{item.value}
						</strong>

					</div>
				))}

			</div>

		</motion.div>
	);
};


export default SalesPerformance;