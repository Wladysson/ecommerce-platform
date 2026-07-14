const SearchSort = () => {
	return (

		<div className="flex items-center justify-between bg-gray-800 border border-gray-700 rounded-xl px-6 py-4">

			<div>

				<h2 className="text-xl font-semibold text-white">
					Produtos encontrados
				</h2>

			</div>

			<select
				className="
					bg-gray-900
					border
					border-gray-700
					text-white
					rounded-lg
					px-4
					py-2
					outline-none
					focus:ring-2
					focus:ring-emerald-500
				"
			>

				<option>Mais relevantes</option>

				<option>Menor preço</option>

				<option>Maior preço</option>

				<option>Mais vendidos</option>

				<option>Mais recentes</option>

				<option>Nome (A-Z)</option>

				<option>Nome (Z-A)</option>

			</select>

		</div>

	);
};

export default SearchSort;