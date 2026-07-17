import { motion } from "framer-motion";
import {
	LineChart,
	Line,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";


const CustomerGrowth = ({ data = [] }) => {

	return (
		<motion.div
			className="rounded-xl border border-gray-700 bg-gray-800 p-6"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
		>

			<h2 className="mb-5 text-xl font-semibold text-white">
				Crescimento de Clientes
			</h2>


			<ResponsiveContainer width="100%" height={300}>

				<LineChart data={data}>

					<CartesianGrid strokeDasharray="3 3" />

					<XAxis
						dataKey="month"
						stroke="#9CA3AF"
					/>

					<YAxis
						stroke="#9CA3AF"
					/>

					<Tooltip />


					<Line
						type="monotone"
						dataKey="customers"
						stroke="#10B981"
						strokeWidth={3}
						name="Clientes"
					/>

				</LineChart>

			</ResponsiveContainer>

		</motion.div>
	);
};


export default CustomerGrowth;