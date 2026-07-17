import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { useProductStore } from "../stores/useProductStore";

import SearchHeader from "../components/search/SearchHeader";
import SearchSidebar from "../components/search/SearchSidebar";
import SearchGrid from "../components/search/SearchGrid";
import SearchSort from "../components/search/SearchSort";
import SearchPagination from "../components/search/SearchPagination";


const SearchResultsPage = () => {

	const [searchParams] = useSearchParams();

	const query = searchParams.get("query") || "";


	const {
		searchProducts,
		products,
		loading,
	} = useProductStore();



	useEffect(() => {

		if (query.trim()) {

			searchProducts(query);

		}

	}, [query]);



	return (

		<div className="max-w-screen-3xl mx-auto px-6 py-8">


			<SearchHeader
				query={query}
				total={products.length}
			/>



			<div className="mt-8 flex gap-8">


				<SearchSidebar />



				<div className="flex-1">


					<SearchSort />



					<SearchGrid
						products={products}
						loading={loading}
					/>



					<SearchPagination />


				</div>


			</div>


		</div>

	);

};


export default SearchResultsPage;