import { AlertTriangle } from "lucide-react";

const LowStockAlert = ({ products = [], onSelect }) => {
	const lowStockProducts = products.filter(
		(product) => product.stock > 0 && product.stock <= 10
	);

	if (!lowStockProducts.length) return null;

	return (
		<div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-6">
			<div className="flex items-center gap-3 mb-5">
				<AlertTriangle
					size={22}
					className="text-yellow-400"
				/>

				<h2 className="text-lg font-semibold text-yellow-400">
					Produtos com Estoque Baixo
				</h2>
			</div>

			<div className="space-y-3">
				{lowStockProducts.map((product) => (
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
							<span className="text-yellow-400 font-bold">
								{product.stock} un.
							</span>

							<button
								onClick={() => onSelect?.(product)}
								className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-lg text-white transition"
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

export default LowStockAlert;