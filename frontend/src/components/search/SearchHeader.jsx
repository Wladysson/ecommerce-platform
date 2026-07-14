const SearchHeader = ({ query, total }) => {

	return (

		<div className="border-b border-gray-700 pb-5">

			<p className="mt-2 text-gray-400">

				Foram encontrados

				<span className="text-emerald-400 font-semibold mx-2">

					{total}

				</span>

				produtos relacionados à pesquisa

				<span className="text-emerald-400 font-semibold ml-2">

					"{query}"

				</span>

			</p>

		</div>

	);

};

export default SearchHeader;