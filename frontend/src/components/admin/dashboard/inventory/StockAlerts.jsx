import { motion } from "framer-motion";
import {
	AlertCircle,
	TrendingDown,
	PackageX,
} from "lucide-react";


const StockAlerts = ({ alerts = [] }) => {


	const icons = {
		low: TrendingDown,
		out: PackageX,
		warning: AlertCircle,
	};


	return (
		<motion.div
			className="rounded-xl border border-gray-700 bg-gray-800 p-6"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>

			<h2 className="mb-5 text-xl font-semibold text-white">
				Alertas de Estoque
			</h2>


			<div className="space-y-3">

				{alerts.map((alert,index)=>{

					const Icon = icons[alert.type] || AlertCircle;

					return (
						<div
							key={index}
							className="flex items-center gap-4 rounded-lg 
							bg-gray-700/50 p-4"
						>

							<div className="rounded-lg bg-red-500/20 p-2">

								<Icon
									size={22}
									className="text-red-400"
								/>

							</div>


							<div>

								<p className="font-medium text-white">
									{alert.title}
								</p>

								<p className="text-sm text-gray-400">
									{alert.message}
								</p>

							</div>


						</div>
					);

				})}

			</div>

		</motion.div>
	);
};


export default StockAlerts;