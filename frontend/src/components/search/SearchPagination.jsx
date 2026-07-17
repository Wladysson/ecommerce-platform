const SearchPagination = () => {
	return (
		<div className="flex justify-center items-center gap-3 mt-10">

			<button
				className="
					w-10
					h-10
					rounded-lg
					bg-gray-800
					border
					border-gray-700
					text-gray-400
					hover:bg-emerald-600
					hover:text-white
					transition
				"
			>
				&lt;
			</button>

			<button className="w-10 h-10 rounded-lg bg-emerald-600 text-white font-semibold">
				1
			</button>

			<button className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 hover:bg-emerald-600 transition">
				2
			</button>

			<button className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 hover:bg-emerald-600 transition">
				3
			</button>

			<button
				className="
					w-10
					h-10
					rounded-lg
					bg-gray-800
					border
					border-gray-700
					text-gray-400
					hover:bg-emerald-600
					hover:text-white
					transition
				"
			>
				&gt;
			</button>

		</div>
	);
};

export default SearchPagination;