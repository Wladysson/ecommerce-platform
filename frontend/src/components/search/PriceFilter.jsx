import { useState } from "react";

const PriceFilter = () => {
	const [minPrice, setMinPrice] = useState("");
	const [maxPrice, setMaxPrice] = useState("");

	return (
		<div>

			<h3 className="text-lg font-semibold text-white mb-4">
				Faixa de Preço
			</h3>

			<div className="space-y-4">

				<input
					type="number"
					placeholder="Preço mínimo"
					value={minPrice}
					onChange={(e) => setMinPrice(e.target.value)}
					className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
				/>

				<input
					type="number"
					placeholder="Preço máximo"
					value={maxPrice}
					onChange={(e) => setMaxPrice(e.target.value)}
					className="w-full bg-gray-900 border border-gray-700 rounded-lg px-3 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
				/>

				<button
					className="w-full bg-emerald-600 hover:bg-emerald-700 transition rounded-lg py-2 font-semibold"
				>
					Aplicar
				</button>

			</div>

		</div>
	);
};

export default PriceFilter;