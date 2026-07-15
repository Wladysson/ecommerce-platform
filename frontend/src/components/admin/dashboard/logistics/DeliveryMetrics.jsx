import { motion } from "framer-motion";
import {
	Timer,
	MapPin,
	CheckCircle,
	Percent,
} from "lucide-react";


const DeliveryMetrics = ({ delivery = {} }) => {


	const metrics = [
		{
			title:"Tempo Médio",
			value:`${delivery.averageTime || 0} dias`,
			icon:Timer,
		},
		{
			title:"Entregas Realizadas",
			value:delivery.completed || 0,
			icon:CheckCircle,
		},
		{
			title:"Cobertura",
			value:`${delivery.coverage || 0}%`,
			icon:MapPin,
		},
		{
			title:"Taxa de Sucesso",
			value:`${delivery.successRate || 0}%`,
			icon:Percent,
		},
	];


	return (
		<motion.div
			className="rounded-xl border border-gray-700 bg-gray-800 p-6"
			initial={{opacity:0}}
			animate={{opacity:1}}
		>

			<h2 className="mb-5 text-xl font-semibold text-white">
				Métricas de Entrega
			</h2>


			<div className="grid grid-cols-2 gap-4">

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
								size={20}
								className="text-emerald-400"
							/>

						</div>


						<p className="mt-3 text-xl font-bold text-white">
							{item.value}
						</p>

					</div>
				))}

			</div>


		</motion.div>
	);
};


export default DeliveryMetrics;