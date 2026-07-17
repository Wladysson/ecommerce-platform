import { motion } from "framer-motion";

const MetricCard = ({
	title,
	value,
	growth,
	icon: Icon,
	color = "emerald",
	description,
}) => {
	const colors = {
		emerald: "from-emerald-500 to-emerald-700",
		blue: "from-blue-500 to-blue-700",
		purple: "from-purple-500 to-purple-700",
		orange: "from-orange-500 to-orange-700",
		red: "from-red-500 to-red-700",
	};

	return (
		<motion.div
			className={`relative overflow-hidden rounded-xl border border-gray-700 
			bg-gray-800 p-5 shadow-lg`}
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			whileHover={{ scale: 1.02 }}
		>
			<div
				className={`absolute inset-0 bg-gradient-to-br ${
					colors[color]
				} opacity-10`}
			/>

			<div className="relative z-10 flex items-start justify-between">
				<div>
					<p className="text-sm font-medium text-gray-400">
						{title}
					</p>

					<h3 className="mt-2 text-3xl font-bold text-white">
						{value}
					</h3>

					{growth && (
						<div className="mt-2 flex items-center gap-2">
							<span
								className={`text-sm font-semibold ${
									growth.includes("-")
										? "text-red-400"
										: "text-emerald-400"
								}`}
							>
								{growth}
							</span>

							<span className="text-xs text-gray-500">
								comparado ao período anterior
							</span>
						</div>
					)}

					{description && (
						<p className="mt-3 text-xs text-gray-500">
							{description}
						</p>
					)}
				</div>


				<div
					className={`rounded-lg bg-gradient-to-br ${
						colors[color]
					} p-3`}
				>
					<Icon className="h-7 w-7 text-white" />
				</div>
			</div>
		</motion.div>
	);
};

export default MetricCard;