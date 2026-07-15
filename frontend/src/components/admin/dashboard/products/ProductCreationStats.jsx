import { motion } from "framer-motion";
import {
	PlusCircle,
	PackagePlus,
	CalendarDays,
} from "lucide-react";


const ProductCreationStats = ({ data = {} }) => {


	const stats = [
		{
			title: "Criados Hoje",
			value: data.today || 0,
			icon: PlusCircle,
		},
		{
			title: "Este Mês",
			value: data.month || 0,
			icon: PackagePlus,
		},
		{
			title: "Último Cadastro",
			value: data.lastProduct || "-",
			icon: CalendarDays,
		},
	];


	return (
		<motion.div
			className="rounded-xl border border-gray-700 bg-gray-800 p-6"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
		>

			<h2 className="mb-5 text-xl font-semibold text-white">
				Criação de Produtos
			</h2>


			<div className="space-y-4">

				{stats.map((item)=>(
					<div
						key={item.title}
						className="flex items-center justify-between rounded-lg bg-gray-700/50 p-4"
					>

						<div className="flex items-center gap-3">

							<item.icon
								className="text-emerald-400"
								size={22}
							/>

							<span className="text-gray-300">
								{item.title}
							</span>

						</div>


						<strong className="text-white">
							{item.value}
						</strong>

					</div>
				))}

			</div>

		</motion.div>
	);
};


export default ProductCreationStats;