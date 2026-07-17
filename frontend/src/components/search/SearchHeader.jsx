const SearchHeader = ({ query, total }) => {

	const filters = [
		"Uso pessoal",
		"Uso profissional",
		"Promoções",
		"Ofertas do dia",
		"Mais vendidos",
		"Lançamento",
		"Ideias para presente",
		"Melhor avaliados",
		"Frete grátis",
		"50% OFF",
		"Cupons",
		"Continuar comprando",
		"Novidades",
		"Atendimento",
	];

	return (

		<div className="border-b border-gray-700 pb-3">

			<div className="flex gap-3 overflow-x-auto pb-3 scrollbar-hide">

				{filters.map((filter) => (

					<button
						key={filter}
						className="
							whitespace-nowrap
							rounded-full
							bg-white
							border
							border-gray-200
							px-4
							py-2
							text-sm
							font-medium
							text-gray-900
							transition-all
							duration-200
							hover:bg-emerald-600
							hover:border-emerald-600
							hover:text-white
						"
					>
						{filter}
					</button>

				))}

			</div>

			<p className="text-sm text-gray-400">

				Encontrados

				<span className="mx-1 font-semibold text-emerald-400">
					{total}
				</span>

				produtos para

				<span className="ml-1 font-semibold text-emerald-400">
					"{query}"
				</span>

			</p>

		</div>

	);

};

export default SearchHeader;