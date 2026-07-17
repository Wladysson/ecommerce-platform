import InventoryRow from "./InventoryRow";

const InventoryTable = ({
	products = [],
	onView,
	onEdit,
}) => {
	return (
		<div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
			<div className="overflow-x-auto">
				<table className="min-w-full">
					<thead className="bg-gray-900">
						<tr className="text-left">
							<th className="px-6 py-4 text-gray-300">
								Produto
							</th>

							<th className="px-6 py-4 text-gray-300">
								Categoria
							</th>

							<th className="px-6 py-4 text-gray-300">
								Preço
							</th>

							<th className="px-6 py-4 text-gray-300">
								Estoque
							</th>

							<th className="px-6 py-4 text-gray-300">
								Status
							</th>

							<th className="px-6 py-4 text-center text-gray-300">
								Ações
							</th>
						</tr>
					</thead>

					<tbody>
						{products.length > 0 ? (
							products.map((product) => (
								<InventoryRow
									key={product.id}
									product={product}
									onView={onView}
									onEdit={onEdit}
								/>
							))
						) : (
							<tr>
								<td
									colSpan={6}
									className="text-center py-10 text-gray-400"
								>
									Nenhum produto encontrado.
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default InventoryTable;