import { PackageSearch } from "lucide-react";

const InventoryHeader = () => {
	return (
		<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
			<div>
				<div className="flex items-center gap-3">
					<div className="bg-emerald-500/20 p-3 rounded-xl">
						<PackageSearch className="text-emerald-400" size={28} />
					</div>

					<div>
						<h1 className="text-3xl font-bold text-white">
							Estoque
						</h1>

						<p className="text-gray-400 mt-1">
							Gerencie todos os produtos cadastrados no sistema.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default InventoryHeader;