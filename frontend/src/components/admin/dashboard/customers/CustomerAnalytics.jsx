import { motion } from "framer-motion";
import {
	Users,
	UserCheck,
	UserPlus,
	Repeat,
} from "lucide-react";


const CustomerAnalytics = ({ customers = {} }) => {

	const metrics = [
		{
			title: "Total de Clientes",
			value: customers.total || 0,
			icon: Users,
		},
		{
			title: "Clientes Ativos",
			value: customers.active || 0,
			icon: UserCheck,
		},
		{
			title: "Novos Clientes",
			value: customers.new || 0,
			icon: UserPlus,
		},
		{
			title: "Recorrentes",
			value: customers.returning || 0,
			icon: Repeat,
		},
	];


	return (
		<motion.div
			className="rounded-xl border border-gray-700 bg-gray-800 p-6"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
		>

			<h2 className="mb-5 text-xl font-semibold text-white">
				Análise de Clientes
			</h2>


			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

				{metrics.map((item)=>(
					<div
						key={item.title}
						className="rounded-lg bg-gray-700/50 p-4"
					>

						<div className="flex items-center justify-between">

							<span className="text-sm text-gray-400">
								{item.title}
							</span>

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


export default CustomerAnalytics;