import { motion } from "framer-motion";
import { BarChart3, Download, RefreshCcw } from "lucide-react";

const DashboardHeader = ({ onRefresh }) => {
	return (
		<motion.div
			className="mb-8 flex flex-col gap-4 rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-lg md:flex-row md:items-center md:justify-between"
			initial={{ opacity: 0, y: -20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className="flex items-center gap-4">
				<div className="rounded-lg bg-emerald-600/20 p-3">
					<BarChart3 className="h-8 w-8 text-emerald-400" />
				</div>

				<div>
					<h1 className="text-3xl font-bold text-white">
						Admin Dashboard
					</h1>

					<p className="mt-1 text-sm text-gray-400">
						Gerencie vendas, produtos, clientes e operações da plataforma
					</p>
				</div>
			</div>

			<div className="flex gap-3">
				<button
					className="flex items-center gap-2 rounded-lg border border-gray-600 
					bg-gray-700 px-4 py-2 text-sm font-medium text-gray-200 
					transition hover:bg-gray-600"
				>
					<Download size={18} />
					Exportar
				</button>

				<button
					onClick={onRefresh}
					className="flex items-center gap-2 rounded-lg 
					bg-emerald-600 px-4 py-2 text-sm font-medium text-white 
					transition hover:bg-emerald-700"
				>
					<RefreshCcw size={18} />
					Atualizar
				</button>
			</div>
		</motion.div>
	);
};

export default DashboardHeader;