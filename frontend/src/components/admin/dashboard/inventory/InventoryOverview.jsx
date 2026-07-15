import { motion } from "framer-motion";
import {
	Boxes,
	PackageCheck,
	DollarSign,
	RefreshCcw,
} from "lucide-react";


const InventoryOverview = ({ inventory = {} }) => {

	const cards = [
		{
			title: "Total em Estoque",
			value: inventory.total || 0,
			icon: Boxes,
		},
		{
			title: "Produtos Disponíveis",
			value: inventory.available || 0,
			icon: PackageCheck,
		},
		{
			title: "Valor do Estoque",
			value: `R$ ${inventory.value || 0}`,
			icon: DollarSign,
		},
		{
			title: "Movimentações",
			value: inventory.movements || 0,
			icon: RefreshCcw,
		},
	];


	return (
		<motion.div
			className="rounded-xl border border-gray-700 bg-gray-800 p-6"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
		>

			<h2 className="mb-5 text-xl font-semibold text-white">
				Gestão de Estoque
			</h2>


			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

				{cards.map((item)=>(
					<div
						key={item.title}
						className="rounded-lg bg-gray-700/50 p-4"
					>

						<div className="flex items-center justify-between">

							<p className="text-sm text-gray-400">
								{item.title}
							</p>

							<item.icon
								size={22}
								className="text-emerald-400"
							/>

						</div>


						<p className="mt-3 text-2xl font-bold text-white">
							{item.value}
						</p>

					</div>
				))}

			</div>

		</motion.div>
	);
};


export default InventoryOverview;