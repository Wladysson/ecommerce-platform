import {
	Package,
	Archive,
	AlertTriangle,
	XCircle,
} from "lucide-react";

const InventoryStats = ({
	totalProducts = 0,
	totalStock = 0,
	lowStock = 0,
	outOfStock = 0,
}) => {
	const cards = [
		{
			title: "Produtos",
			value: totalProducts,
			icon: Package,
			color: "emerald",
		},
		{
			title: "Itens em Estoque",
			value: totalStock,
			icon: Archive,
			color: "blue",
		},
		{
			title: "Estoque Baixo",
			value: lowStock,
			icon: AlertTriangle,
			color: "yellow",
		},
		{
			title: "Sem Estoque",
			value: outOfStock,
			icon: XCircle,
			color: "red",
		},
	];

	return (
		<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
			{cards.map((card) => {
				const Icon = card.icon;

				return (
					<div
						key={card.title}
						className="bg-gray-800 border border-gray-700 rounded-xl p-5"
					>
						<div className="flex justify-between items-center">
							<div>
								<p className="text-gray-400 text-sm">
									{card.title}
								</p>

								<h2 className="text-3xl font-bold text-white mt-2">
									{card.value}
								</h2>
							</div>

							<div
								className={`bg-${card.color}-500/20 p-3 rounded-xl`}
							>
								<Icon
									size={26}
									className={`text-${card.color}-400`}
								/>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default InventoryStats;