import ProductCard from "../ProductCard";

const SearchGrid = ({ products, loading }) => {

	if (loading) {
		return (
			<div className="flex justify-center py-20">
				<p className="text-gray-400 text-lg">
					Carregando produtos...
				</p>
			</div>
		);
	}

	if (!products || products.length === 0) {
		return (
			<div className="bg-gray-800 rounded-xl border border-gray-700 py-20 text-center mt-6">
				<h2 className="text-2xl font-semibold text-white">
					Nenhum produto encontrado
				</h2>

				<p className="text-gray-400 mt-3">
					Tente pesquisar utilizando outro termo.
				</p>
			</div>
		);
	}

	return (
		<div
			className="
				mt-6
				grid
				grid-cols-2
				md:grid-cols-3
				lg:grid-cols-4
				2xl:grid-cols-5
				gap-4
			"
		>
			{products.map((product) => (
				<ProductCard
					key={product.id}
					product={product}
				/>
			))}
		</div>
	);
};

export default SearchGrid;