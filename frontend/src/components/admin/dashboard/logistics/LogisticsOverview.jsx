import { motion } from "framer-motion";
import {
	Truck,
	PackageCheck,
	Clock,
	AlertTriangle,
} from "lucide-react";


const LogisticsOverview = ({ logistics = {} }) => {

	const metrics = [
		{
			title: "Pedidos Enviados",
			value: logistics.shipped || 0,
			icon: Truck,
		},
		{
			title: "Entregues",
			value: logistics.delivered || 0,
			icon: PackageCheck,
		},
		{
			title: "Em Transporte",
			value: logistics.shipping || 0,
			icon: Clock,
		},
		{
			title: "Atrasados",
			value: logistics.delayed || 0,
			icon: AlertTriangle,
		},
	];


	return (
		<motion.div
			className="rounded-xl border border-gray-700 bg-gray-800 p-6"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
		>

			<h2 className="mb-5 text-xl font-semibold text-white">
				Controle Logístico
			</h2>


			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

				{metrics.map((item)=>(
					<div
						key={item.title}
						className="rounded-lg bg-gray-700/50 p-4"
					>

						<div className="flex justify-between">

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


export default LogisticsOverview;