import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";

const DashboardFilters = ({ period, setPeriod }) => {
	const periods = [
		{
			value: "today",
			label: "Hoje",
		},
		{
			value: "7days",
			label: "Últimos 7 dias",
		},
		{
			value: "30days",
			label: "Últimos 30 dias",
		},
		{
			value: "year",
			label: "Este ano",
		},
	];

	return (
		<motion.div
			className="mb-6 flex flex-col gap-3 rounded-xl border border-gray-700 
			bg-gray-800 p-4 shadow-md sm:flex-row sm:items-center sm:justify-between"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className="flex items-center gap-2 text-gray-300">
				<CalendarDays size={20} className="text-emerald-400" />

				<span className="text-sm font-medium">
					Período de análise
				</span>
			</div>


			<div className="flex flex-wrap gap-2">
				{periods.map((item) => (
					<button
						key={item.value}
						onClick={() => setPeriod(item.value)}
						className={`rounded-lg px-4 py-2 text-sm font-medium transition ${
							period === item.value
								? "bg-emerald-600 text-white"
								: "bg-gray-700 text-gray-300 hover:bg-gray-600"
						}`}
					>
						{item.label}
					</button>
				))}
			</div>
		</motion.div>
	);
};

export default DashboardFilters;