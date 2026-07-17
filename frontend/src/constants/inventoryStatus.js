const inventoryStatus = {
	IN_STOCK: {
		key: "in_stock",
		label: "Em Estoque",
		color: "emerald",
		bg: "bg-emerald-500/20",
		text: "text-emerald-400",
		border: "border-emerald-500/30",
	},

	LOW_STOCK: {
		key: "low_stock",
		label: "Estoque Baixo",
		color: "yellow",
		bg: "bg-yellow-500/20",
		text: "text-yellow-400",
		border: "border-yellow-500/30",
	},

	OUT_OF_STOCK: {
		key: "out_of_stock",
		label: "Sem Estoque",
		color: "red",
		bg: "bg-red-500/20",
		text: "text-red-400",
		border: "border-red-500/30",
	},
};

export const getInventoryStatus = (stock = 0) => {
	if (stock === 0) {
		return inventoryStatus.OUT_OF_STOCK;
	}

	if (stock <= 10) {
		return inventoryStatus.LOW_STOCK;
	}

	return inventoryStatus.IN_STOCK;
};

export default inventoryStatus;