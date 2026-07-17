const brands = [
	{ name: "Dell", total: 42 },
	{ name: "Samsung", total: 37 },
	{ name: "LG", total: 24 },
	{ name: "Acer", total: 18 },
	{ name: "Asus", total: 31 },
	{ name: "Lenovo", total: 29 },
	{ name: "Kingston", total: 15 },
	{ name: "Corsair", total: 21 },
	{ name: "HyperX", total: 12 },
	{ name: "MSI", total: 17 },
	{ name: "Intel", total: 26 },
	{ name: "AMD", total: 19 },
	{ name: "NVIDIA", total: 14 },
];

const BrandFilter = () => {
	return (
		<div>

			<h3 className="text-lg font-semibold text-white mb-4">
				Marcas
			</h3>

			<div className="space-y-2 max-h-72 overflow-y-auto pr-1">

				{brands.map((brand) => (

					<label
						key={brand.name}
						className="
							flex
							items-center
							justify-between
							rounded-lg
							px-2
							py-2
							cursor-pointer
							transition
							hover:bg-gray-800
						"
					>

						<div className="flex items-center gap-3">

							<input
								type="checkbox"
								className="w-4 h-4 accent-emerald-500"
							/>

							<span className="text-sm text-gray-300">
								{brand.name}
							</span>

						</div>

						<span className="text-xs text-gray-500">
							({brand.total})
						</span>

					</label>

				))}

			</div>

		</div>
	);
};

export default BrandFilter;