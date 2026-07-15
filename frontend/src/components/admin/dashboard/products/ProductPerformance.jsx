import { motion } from "framer-motion";
import {
	Package,
	TrendingUp,
	Star,
	AlertTriangle,
} from "lucide-react";


const ProductPerformance = ({ products = {} }) => {

	const metrics = [
		{
			title: "Produtos Ativos",
			value: products.active || 0,
			icon: Package,
		},
		{
			title: "Mais Vendidos",
			value: products.bestSellers || 0,
			icon: TrendingUp,
		},
		{
			title: "Destaques",
			value: products.featured || 0,
			icon: Star,
		},
		{
			title: "Baixo Estoque",
			value: products.lowStock || 0,
			icon: AlertTriangle,
		},
	];


	return (
		<motion.div
			className="rounded-xl border border-gray-700 bg-gray-800 p-6"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
		>

			<h2 className="mb-5 text-xl font-semibold text-white">
				Performance dos Produtos
			</h2>


			<div className="grid grid-cols-2 gap-4">

				{metrics.map((item) => (
					<div
						key={item.title}
						className="rounded-lg bg-gray-700/50 p-4"
					>

						<div className="flex justify-between">
							<span className="text-sm text-gray-400">
								{item.title}
							</span>

							<item.icon
								size={20}
								className="text-emerald-400"
							/>
						</div>

						<p className="mt-3 text-2xl font-bold text-white">
							{item.value}
						</p>

					</div>
				))}

			</div>

		</motion.div>
	);
};


export default ProductPerformance;