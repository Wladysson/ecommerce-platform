import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";


const LowStockProducts = ({ products = [] }) => {

	return (
		<motion.div
			className="rounded-xl border border-gray-700 bg-gray-800 p-6"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>

			<div className="mb-5 flex items-center gap-3">

				<AlertTriangle
					className="text-yellow-400"
					size={24}
				/>

				<h2 className="text-xl font-semibold text-white">
					Produtos com Estoque Baixo
				</h2>

			</div>


			<div className="space-y-3">

				{products.length === 0 && (
					<p className="text-sm text-gray-400">
						Nenhum produto com estoque crítico
					</p>
				)}


				{products.map((product)=>(
					<div
						key={product.id}
						className="flex items-center justify-between rounded-lg bg-gray-700/50 p-4"
					>

						<div>
							<p className="font-medium text-white">
								{product.name}
							</p>

							<p className="text-sm text-gray-400">
								{product.category}
							</p>
						</div>


						<div className="text-right">

							<p className="text-sm text-yellow-400">
								{product.stock} unidades
							</p>

							<p className="text-xs text-gray-500">
								Necessita reposição
							</p>

						</div>


					</div>
				))}

			</div>

		</motion.div>
	);
};


export default LowStockProducts;