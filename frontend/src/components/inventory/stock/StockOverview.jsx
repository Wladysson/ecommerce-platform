const StockOverview = ({ product }) => {
	if (!product) return null;

	const stock = product.stock ?? 0;

	const status =
		stock === 0
			? "Sem estoque"
			: stock <= 10
			? "Estoque baixo"
			: "Em estoque";

	return (
		<div className="bg-gray-800 rounded-xl border border-gray-700 p-6">
			<h2 className="text-xl font-semibold text-white mb-6">
				Visão Geral do Estoque
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
				<div className="bg-gray-900 rounded-lg p-5">
					<p className="text-gray-400 text-sm">
						Quantidade Atual
					</p>

					<h3 className="text-4xl font-bold text-white mt-2">
						{stock}
					</h3>
				</div>

				<div className="bg-gray-900 rounded-lg p-5">
					<p className="text-gray-400 text-sm">
						Status
					</p>

					<h3 className="text-lg font-semibold text-white mt-2">
						{status}
					</h3>
				</div>

				<div className="bg-gray-900 rounded-lg p-5">
					<p className="text-gray-400 text-sm">
						Categoria
					</p>

					<h3 className="text-lg font-semibold text-white mt-2">
						{product.category}
					</h3>
				</div>
			</div>
		</div>
	);
};

export default StockOverview;