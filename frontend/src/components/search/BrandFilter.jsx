const brands = [
	"Dell",
	"Samsung",
	"LG",
	"Acer",
	"Asus",
	"Lenovo",
	"Kingston",
	"Corsair",
	"HyperX",
	"MSI",
	"Intel",
	"AMD",
	"NVIDIA",
];

const BrandFilter = () => {
	return (
		<div>

			<h3 className="text-lg font-semibold text-white mb-4">
				Marcas
			</h3>

			<div className="space-y-3 max-h-72 overflow-y-auto pr-1">

				{brands.map((brand) => (

					<label
						key={brand}
						className="flex items-center gap-3 cursor-pointer"
					>

						<input
							type="checkbox"
							className="w-4 h-4 rounded accent-emerald-500"
						/>

						<span className="text-gray-300 text-sm">
							{brand}
						</span>

					</label>

				))}

			</div>

		</div>
	);
};

export default BrandFilter;