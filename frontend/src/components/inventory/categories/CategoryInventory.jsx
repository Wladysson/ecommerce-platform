const CategoryInventory = ({ products = [] }) => {
	const inventory = products.reduce((acc, product) => {
		const category = product.category || "Sem categoria";

		if (!acc[category]) {
			acc[category] = {
				products: 0,
				stock: 0,
			};
		}

		acc[category].products += 1;
		acc[category].stock += product.stock || 0;

		return acc;
	}, {});

	return (
		<div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
			<h2 className="text-xl font-semibold text-white mb-6">
				Resumo por Categoria
			</h2>

			<div className="overflow-x-auto">
				<table className="w-full">
					<thead>
						<tr className="border-b border-gray-700">
							<th className="text-left text-gray-400 py-3">
								Categoria
							</th>

							<th className="text-center text-gray-400 py-3">
								Produtos
							</th>

							<th className="text-center text-gray-400 py-3">
								Itens em Estoque
							</th>
						</tr>
					</thead>

					<tbody>
						{Object.entries(inventory).map(
							([category, data]) => (
								<tr
									key={category}
									className="border-b border-gray-700 last:border-none"
								>
									<td className="py-4 text-white">
										{category}
									</td>

									<td className="text-center text-gray-300">
										{data.products}
									</td>

									<td className="text-center text-emerald-400 font-semibold">
										{data.stock}
									</td>
								</tr>
							)
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default CategoryInventory;