import { motion } from "framer-motion";


const CategoryPerformance = ({ categories = [] }) => {

	return (
		<motion.div
			className="rounded-xl border border-gray-700 bg-gray-800 p-6"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>

			<h2 className="mb-5 text-xl font-semibold text-white">
				Categorias Mais Vendidas
			</h2>


			<div className="space-y-4">

				{categories.map((category)=>(
					<div key={category.name}>

						<div className="mb-2 flex justify-between">

							<span className="text-sm text-gray-300">
								{category.name}
							</span>

							<span className="text-sm text-emerald-400">
								{category.percent}%
							</span>

						</div>


						<div className="h-2 rounded-full bg-gray-700">

							<div
								className="h-2 rounded-full bg-emerald-500"
								style={{
									width:`${category.percent}%`
								}}
							/>

						</div>

					</div>
				))}

			</div>

		</motion.div>
	);
};


export default CategoryPerformance;