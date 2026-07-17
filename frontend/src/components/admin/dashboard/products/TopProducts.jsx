import { motion } from "framer-motion";


const TopProducts = ({ products = [] }) => {

	return (
		<motion.div
			className="rounded-xl border border-gray-700 bg-gray-800 p-6"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>

			<h2 className="mb-5 text-xl font-semibold text-white">
				Produtos Mais Vendidos
			</h2>


			<div className="space-y-4">

				{products.map((product, index) => (
					<div
						key={product.id || index}
						className="flex items-center justify-between rounded-lg bg-gray-700/50 p-4"
					>

						<div className="flex items-center gap-3">

							<span className="text-lg font-bold text-emerald-400">
								#{index + 1}
							</span>

							<div>
								<p className="font-medium text-white">
									{product.name}
								</p>

								<p className="text-sm text-gray-400">
									{product.category}
								</p>
							</div>

						</div>


						<div className="text-right">
							<p className="font-semibold text-white">
								{product.sales} vendas
							</p>

							<p className="text-sm text-emerald-400">
								R$ {product.revenue}
							</p>
						</div>


					</div>
				))}

			</div>

		</motion.div>
	);
};


export default TopProducts;