import { useState } from "react";
import { Search, X } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SearchBar = ({
	initialValue = "",
	placeholder = "Pesquisar produtos...",
}) => {
	const navigate = useNavigate();

	const [search, setSearch] = useState(initialValue);

	const handleSearch = () => {
		const text = search.trim();

		if (!text) return;

		navigate(`/search?query=${encodeURIComponent(text)}`);
	};

	const clearSearch = () => {
		setSearch("");
	};

	return (
		<div className="max-w-2xl mx-auto mb-8 relative">

			<input
				type="text"
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						handleSearch();
					}
				}}
				placeholder={placeholder}
				className="
					w-full
					bg-white
					text-gray-900
					placeholder-gray-500
					rounded-full
					border
					border-gray-300
					py-3
					pl-5
					pr-20
					focus:outline-none
					focus:ring-2
					focus:ring-emerald-500
				"
			/>

			{search.length > 0 && (
				<button
					onClick={clearSearch}
					className="
						absolute
						right-12
						top-1/2
						-transform
						-translate-y-1/2
						text-gray-500
						hover:text-red-500
						transition
					"
				>
					<X size={18} />
				</button>
			)}

			<button
				onClick={handleSearch}
				className="
					absolute
					right-4
					top-1/2
					-transform
					-translate-y-1/2
					text-gray-500
					hover:text-emerald-600
					transition
				"
			>
				<Search size={20} />
			</button>

		</div>
	);
};

export default SearchBar;