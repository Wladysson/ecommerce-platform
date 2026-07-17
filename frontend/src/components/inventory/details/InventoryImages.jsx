const InventoryImages = ({ product }) => {
	if (!product) return null;

	const images = product.images?.length
		? product.images
		: [product.image];

	return (
		<div className="bg-gray-800 border border-gray-700 rounded-xl p-6">
			<h2 className="text-2xl font-semibold text-white mb-6">
				Imagens do Produto
			</h2>

			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{images.map((image, index) => (
					<div
						key={index}
						className="overflow-hidden rounded-xl border border-gray-700 bg-gray-900"
					>
						<img
							src={image}
							alt={`${product.name}-${index}`}
							className="w-full h-44 object-cover hover:scale-105 transition duration-300"
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default InventoryImages;