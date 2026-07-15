const categories = [
	{ name: "Monitores", total: 24 },
	{ name: "Desktops", total: 18 },
	{ name: "Notebooks", total: 35 },
	{ name: "Celulares", total: 42 },
	{ name: "Placas de Vídeo", total: 16 },
	{ name: "Memórias", total: 21 },
	{ name: "Armazenamento", total: 29 },
	{ name: "Roteadores", total: 14 },
	{ name: "Impressoras", total: 9 },
	{ name: "Webcams", total: 12 },
	{ name: "Acessórios", total: 57 },
];

const CategoryFilter = () => {
	return (
		<div>

			<h3 className="text-lg font-semibold text-white mb-4">
				Categorias
			</h3>

			<div className="space-y-3">

				{categories.map((category) => (

					<label
						key={category.name}
						className="flex items-center justify-between cursor-pointer group"
					>

						<div className="flex items-center gap-3">

							<input
								type="checkbox"
								className="w-4 h-4 rounded accent-emerald-500"
							/>

							<span className="text-sm text-gray-300 group-hover:text-white transition">
								{category.name}
							</span>

						</div>

						<span className="text-xs text-gray-500">
							({category.total})
						</span>

					</label>

				))}

			</div>

		</div>
	);
};

export default CategoryFilter;