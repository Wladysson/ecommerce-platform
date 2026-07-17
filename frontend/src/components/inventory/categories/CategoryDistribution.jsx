const CategoryDistribution = ({ products = [] }) => {
	const categories = products.reduce((acc, product) => {
		const category = product.category || "Sem categoria";

		acc[category] = (acc[category] || 0) + 1;

		return acc;
	}, {});

	const total = products.length || 1;

	return (
		<div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
			<h2 className="text-xl font-semibold text-white mb-6">
				Distribuição por Categoria
			</h2>

			<div className="space-y-5">
				{Object.entries(categories).map(([category, quantity]) => {
					const percentage = ((quantity / total) * 100).toFixed(1);

					return (
						<div key={category}>
							<div className="flex justify-between mb-2">
								<span className="text-gray-300">
									{category}
								</span>

								<span className="text-white font-semibold">
									{quantity}
								</span>
							</div>

							<div className="w-full bg-gray-900 rounded-full h-3 overflow-hidden">
								<div
									className="bg-emerald-500 h-full rounded-full"
									style={{
										width: `${percentage}%`,
									}}
								/>
							</div>

							<p className="text-gray-500 text-xs mt-1">
								{percentage}%
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default CategoryDistribution;