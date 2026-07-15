import { motion } from "framer-motion";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	Legend,
	ResponsiveContainer,
} from "recharts";


const RevenueChart = ({ data = [] }) => {
	return (
		<motion.div
			className="rounded-xl border border-gray-700 bg-gray-800 p-6 shadow-lg"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className="mb-6">
				<h2 className="text-xl font-semibold text-white">
					Receita e Vendas
				</h2>

				<p className="text-sm text-gray-400">
					Análise de desempenho financeiro
				</p>
			</div>


			<ResponsiveContainer width="100%" height={350}>
				<LineChart data={data}>
					<CartesianGrid strokeDasharray="3 3" />

					<XAxis
						dataKey="name"
						stroke="#9CA3AF"
					/>

					<YAxis
						stroke="#9CA3AF"
					/>

					<Tooltip />

					<Legend />


					<Line
						type="monotone"
						dataKey="revenue"
						stroke="#10B981"
						strokeWidth={3}
						name="Receita"
					/>

					<Line
						type="monotone"
						dataKey="sales"
						stroke="#3B82F6"
						strokeWidth={3}
						name="Pedidos"
					/>
				</LineChart>
			</ResponsiveContainer>
		</motion.div>
	);
};

export default RevenueChart;