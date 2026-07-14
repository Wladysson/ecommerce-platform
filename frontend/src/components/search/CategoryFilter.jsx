const categories = [
	"Monitores",
	"Desktops",
	"Notebooks",
	"Celulares",
	"Placas de Vídeo",
	"Memórias",
	"Armazenamento",
	"Roteadores",
	"Impressoras",
	"Webcams",
	"Acessórios",
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
						key={category}
						className="flex items-center gap-3 cursor-pointer"
					>

						<input
							type="checkbox"
							className="w-4 h-4 rounded accent-emerald-500"
						/>

						<span className="text-gray-300 text-sm">
							{category}
						</span>

					</label>

				))}

			</div>

		</div>
	);
};

export default CategoryFilter;