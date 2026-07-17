import { Search, Filter } from "lucide-react";

const InventoryFilters = ({
	search,
	onSearchChange,
	category,
	onCategoryChange,
	status,
	onStatusChange,
}) => {
	return (
		<div className="bg-gray-800 rounded-xl p-5 border border-gray-700 space-y-5">
			<div className="flex items-center gap-2">
				<Filter size={18} className="text-emerald-400" />

				<h2 className="text-white font-semibold">
					Filtros
				</h2>
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
				<div className="relative">
					<Search
						size={18}
						className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
					/>

					<input
						type="text"
						value={search}
						onChange={(e) =>
							onSearchChange(e.target.value)
						}
						placeholder="Buscar produto..."
						className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 pl-10 pr-4 text-white focus:outline-none focus:border-emerald-500"
					/>
				</div>

				<select
					value={category}
					onChange={(e) =>
						onCategoryChange(e.target.value)
					}
					className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
				>
					<option value="">Todas categorias</option>
					<option value="Computadores">Computadores</option>
					<option value="Notebooks">Notebooks</option>
					<option value="Monitores">Monitores</option>
					<option value="Smartphones">Smartphones</option>
					<option value="Memórias">Memórias</option>
					<option value="Armazenamento">Armazenamento</option>
					<option value="Placas de Vídeo">Placas de Vídeo</option>
					<option value="Roteadores">Roteadores</option>
					<option value="Impressoras">Impressoras</option>
					<option value="Webcams">Webcams</option>
					<option value="Cadeiras">Cadeiras</option>
					<option value="Acessórios">Acessórios</option>
				</select>

				<select
					value={status}
					onChange={(e) =>
						onStatusChange(e.target.value)
					}
					className="bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-emerald-500"
				>
					<option value="">Todos os status</option>
					<option value="available">Em estoque</option>
					<option value="low_stock">Estoque baixo</option>
					<option value="out_of_stock">Sem estoque</option>
				</select>
			</div>
		</div>
	);
};

export default InventoryFilters;