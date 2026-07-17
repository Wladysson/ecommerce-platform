import { motion } from "framer-motion";
import {
	AlertTriangle,
	CheckCircle,
	Info,
	XCircle,
} from "lucide-react";


const AlertsPanel = ({ alerts = [] }) => {


	const icons = {
		warning: AlertTriangle,
		success: CheckCircle,
		info: Info,
		error: XCircle,
	};


	return (
		<motion.div
			className="rounded-xl border border-gray-700 bg-gray-800 p-6"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
		>

			<h2 className="mb-5 text-xl font-semibold text-white">
				Alertas do Sistema
			</h2>


			<div className="space-y-4">


				{alerts.length === 0 && (
					<p className="text-sm text-gray-400">
						Nenhum alerta pendente
					</p>
				)}


				{alerts.map((alert,index)=>{

					const Icon = icons[alert.type] || Info;


					return (
						<div
							key={index}
							className="flex gap-4 rounded-lg 
							bg-gray-700/50 p-4"
						>

							<div
								className={`
								rounded-lg p-2
								${
									alert.type === "error"
									? "bg-red-500/20"
									:
									alert.type === "warning"
									? "bg-yellow-500/20"
									:
									"bg-emerald-500/20"
								}
								`}
							>

								<Icon
									size={22}
									className={
										alert.type === "error"
										? "text-red-400"
										:
										alert.type === "warning"
										? "text-yellow-400"
										:
										"text-emerald-400"
									}
								/>

							</div>


							<div>

								<h3 className="font-medium text-white">
									{alert.title}
								</h3>

								<p className="mt-1 text-sm text-gray-400">
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


export default AlertsPanel;