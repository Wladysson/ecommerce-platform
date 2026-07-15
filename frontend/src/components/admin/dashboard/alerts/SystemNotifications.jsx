import { motion } from "framer-motion";
import {
	Bell,
	Package,
	UserPlus,
	CreditCard,
} from "lucide-react";


const SystemNotifications = ({ notifications = [] }) => {


	const icons = {
		product: Package,
		user: UserPlus,
		payment: CreditCard,
	};


	return (
		<motion.div
			className="rounded-xl border border-gray-700 bg-gray-800 p-6"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>


			<div className="mb-5 flex items-center gap-3">

				<Bell
					className="text-emerald-400"
					size={24}
				/>

				<h2 className="text-xl font-semibold text-white">
					Atividades Recentes
				</h2>

			</div>



			<div className="space-y-4">


				{notifications.length === 0 && (
					<p className="text-sm text-gray-400">
						Nenhuma atividade recente
					</p>
				)}



				{notifications.map((notification,index)=>{


					const Icon =
						icons[notification.type] || Bell;



					return (

						<div
							key={index}
							className="flex items-center gap-4 
							rounded-lg bg-gray-700/50 p-4"
						>


							<div className="rounded-lg bg-emerald-500/20 p-2">

								<Icon
									size={20}
									className="text-emerald-400"
								/>

							</div>



							<div className="flex-1">


								<p className="text-sm font-medium text-white">
									{notification.message}
								</p>


								<span className="text-xs text-gray-500">
									{notification.time}
								</span>


							</div>


						</div>

					);


				})}


			</div>


		</motion.div>
	);
};


export default SystemNotifications;