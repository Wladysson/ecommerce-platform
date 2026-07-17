import { motion } from "framer-motion";
import {
	Clock,
	CheckCircle,
	Truck,
	XCircle,
} from "lucide-react";


const OrderStatus = ({ status = {} }) => {


	const items = [
		{
			title:"Pendentes",
			value:status.pending || 0,
			icon:Clock,
		},
		{
			title:"Processando",
			value:status.processing || 0,
			icon:Truck,
		},
		{
			title:"Entregues",
			value:status.completed || 0,
			icon:CheckCircle,
		},
		{
			title:"Cancelados",
			value:status.cancelled || 0,
			icon:XCircle,
		},
	];


	return (
		<motion.div
			className="rounded-xl border border-gray-700 bg-gray-800 p-6"
			initial={{opacity:0}}
			animate={{opacity:1}}
		>

			<h2 className="mb-5 text-xl font-semibold text-white">
				Status dos Pedidos
			</h2>


			<div className="grid grid-cols-2 gap-4">

				{items.map((item)=>(
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


						<p className="mt-3 text-2xl font-bold text-white">
							{item.value}
						</p>

					</div>
				))}

			</div>

		</motion.div>
	);
};


export default OrderStatus;