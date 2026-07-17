import { motion } from "framer-motion";
import { Eye, Pencil, Package } from "lucide-react";

import StockBadge from "./inventory/stock/StockBadge";
import useInventoryStore from "../stores/useInventoryStore";

const ProductsList = () => {
	const { products, selectProduct } = useInventoryStore();

	return (
		<motion.div
			className="bg-gray-800 shadow-lg rounded-lg overflow-hidden"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.4 }}
		>
			<table className="min-w-full divide-y divide-gray-700">
				<thead className="bg-gray-700">
					<tr>
						<th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">
							Produto
						</th>

						<th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">
							Categoria
						</th>

						<th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">
							Preço
						</th>

						<th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">
							Estoque
						</th>

						<th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase">
							Status
						</th>

						<th className="px-6 py-3 text-center text-xs font-medium text-gray-300 uppercase">
							Ações
						</th>
					</tr>
				</thead>

				<tbody className="divide-y divide-gray-700">
					{products.map((product) => (
						<tr
							key={product.id}
							className="hover:bg-gray-700 transition"
						>
							<td className="px-6 py-4">
								<div className="flex items-center gap-4">
									<img
										src={product.image}
										alt={product.name}
										className="w-12 h-12 rounded-lg object-cover"
									/>

									<div>
										<h3 className="text-white font-medium">
											{product.name}
										</h3>

										<p className="text-sm text-gray-400">
											ID: {product.id}
										</p>
									</div>
								</div>
							</td>

							<td className="px-6 py-4 text-gray-300">
								{product.category}
							</td>

							<td className="px-6 py-4 text-white">
								R$ {Number(product.price).toFixed(2)}
							</td>

							<td className="px-6 py-4">
								<div className="flex items-center gap-2 text-white">
									<Package size={16} />
									{product.stock}
								</div>
							</td>

							<td className="px-6 py-4">
								<StockBadge stock={product.stock} />
							</td>

							<td className="px-6 py-4">
								<div className="flex justify-center gap-2">
									<button
										onClick={() => selectProduct(product)}
										className="p-2 rounded-lg bg-sky-500/20 text-sky-400 hover:bg-sky-500/30 transition"
									>
										<Eye size={18} />
									</button>

									<button
										onClick={() => selectProduct(product)}
										className="p-2 rounded-lg bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 transition"
									>
										<Pencil size={18} />
									</button>
								</div>
							</td>
						</tr>
					))}

					{products.length === 0 && (
						<tr>
							<td
								colSpan={6}
								className="py-12 text-center text-gray-400"
							>
								Nenhum produto encontrado.
							</td>
						</tr>
					)}
				</tbody>
			</table>
		</motion.div>
	);
};

export default ProductsList;