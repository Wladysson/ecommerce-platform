import CategoryFilter from "./CategoryFilter";
import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import AvailabilityFilter from "./AvailabilityFilter";

const SearchFilters = () => {
	return (
		<div className="space-y-8">

			<CategoryFilter />

			<div className="border-b border-gray-700" />

			<BrandFilter />

			<div className="border-b border-gray-700" />

			<PriceFilter />

			<div className="border-b border-gray-700" />

			<AvailabilityFilter />

		</div>
	);
};

export default SearchFilters;