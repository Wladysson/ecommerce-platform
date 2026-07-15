import { motion } from "framer-motion";
import {
	DollarSign,
	TrendingUp,
	CreditCard,
	Wallet,
} from "lucide-react";


const FinancialOverview = ({ financial = {} }) => {

	const items = [
		{
			title: "Receita Bruta",
			value: `R$ ${financial.gross || 0}`,
			icon: DollarSign,
		},
		{
			title: "Receita Líquida",
			value: `R$ ${financial.net || 0}`,
			icon: Wallet,
		},
		{
			title: "Lucro Estimado",
			value: `R$ ${financial.profit || 0}`,
			icon: TrendingUp,
		},
		{
			title: "Ticket Médio",
			value: `R$ ${financial.ticket || 0}`,
			icon: CreditCard,
		},
	];


	return (
		<motion.div
			className="grid grid-cols-1 gap-4 sm:grid-cols-2"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>

			{items.map((item) => (
				<div
					key={item.title}
					className="rounded-xl border border-gray-700 bg-gray-800 p-5"
				>

					<div className="flex items-center justify-between">

						<div>
							<p className="text-sm text-gray-400">
								{item.title}
							</p>

							<h3 className="mt-2 text-2xl font-bold text-white">
								{item.value}
							</h3>
						</div>


						<div className="rounded-lg bg-emerald-600/20 p-3">
							<item.icon className="text-emerald-400" />
						</div>

					</div>

				</div>
			))}

		</motion.div>
	);
};


export default FinancialOverview;