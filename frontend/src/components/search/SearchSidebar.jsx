import SearchFilters from "./SearchFilters";

const SearchSidebar = () => {
	return (
		<aside className="w-72 shrink-0">

			<div className="bg-gray-800 rounded-xl border border-gray-700 p-5 sticky top-24">

				<h2 className="text-xl font-semibold text-white mb-6">
					Filtros
				</h2>

				<SearchFilters />

			</div>

		</aside>
	);
};

export default SearchSidebar;