const InventoryDetails = ({ product }) => {
	if (!product) return null;

	return (
		<div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
			<h2 className="text-2xl font-semibold text-white mb-6">
				Detalhes do Produto
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<div>
					<p className="text-gray-400 text-sm">Nome</p>
					<p className="text-white font-medium mt-1">
						{product.name}
					</p>
				</div>

				<div>
					<p className="text-gray-400 text-sm">Categoria</p>
					<p className="text-white font-medium mt-1">
						{product.category}
					</p>
				</div>

				<div>
					<p className="text-gray-400 text-sm">Marca</p>
					<p className="text-white font-medium mt-1">
						{product.brand || "-"}
					</p>
				</div>

				<div>
					<p className="text-gray-400 text-sm">Preço</p>
					<p className="text-emerald-400 font-semibold mt-1">
						R$ {product.price?.toFixed(2)}
					</p>
				</div>

				<div>
					<p className="text-gray-400 text-sm">
						Quantidade
					</p>
					<p className="text-white font-medium mt-1">
						{product.stock}
					</p>
				</div>

				<div>
					<p className="text-gray-400 text-sm">
						Código
					</p>
					<p className="text-white font-medium mt-1">
						{product.id}
					</p>
				</div>
			</div>

			<div className="mt-8">
				<p className="text-gray-400 text-sm mb-2">
					Descrição
				</p>

				<div className="bg-gray-900 rounded-lg p-4">
					<p className="text-gray-300 leading-relaxed">
						{product.description}
					</p>
				</div>
			</div>
		</div>
	);
};

export default InventoryDetails;