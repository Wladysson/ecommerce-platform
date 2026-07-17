const StockBadge = ({ stock = 0 }) => {
	let bg = "bg-emerald-500/20";
	let text = "text-emerald-400";
	let label = "Em estoque";

	if (stock <= 10 && stock > 0) {
		bg = "bg-yellow-500/20";
		text = "text-yellow-400";
		label = "Estoque baixo";
	}

	if (stock === 0) {
		bg = "bg-red-500/20";
		text = "text-red-400";
		label = "Sem estoque";
	}

	return (
		<span
			className={`${bg} ${text} px-3 py-1 rounded-full text-xs font-semibold`}
		>
			{label}
		</span>
	);
};

export default StockBadge;