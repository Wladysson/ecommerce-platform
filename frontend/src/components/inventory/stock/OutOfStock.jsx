import { XCircle } from "lucide-react";

const OutOfStock = ({ products = [], onSelect }) => {
	const unavailableProducts = products.filter(
		(product) => product.stock === 0
	);

	if (!unavailableProducts.length) return null;

	return (
		<div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
			<div className="flex items-center gap-3 mb-5">
				<XCircle
					size={22}
					className="text-red-400"
				/>

				<h2 className="text-lg font-semibold text-red-400">
					Produtos Sem Estoque
				</h2>
			</div>

			<div className="space-y-3">
				{unavailableProducts.map((product) => (
					<div
						key={product.id}
						className="flex items-center justify-between bg-gray-900 rounded-lg p-4"
					>
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
									{product.category}
								</p>
							</div>
						</div>

						<div className="flex items-center gap-4">
							<span className="text-red-400 font-bold">
								Sem estoque
							</span>

							<button
								onClick={() => onSelect?.(product)}
								className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white transition"
							>
								Visualizar
							</button>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default OutOfStock;