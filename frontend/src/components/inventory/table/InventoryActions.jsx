import {
	Eye,
	Pencil,
	Trash2,
} from "lucide-react";

const InventoryActions = ({
	product,
	onView,
	onEdit,
	onDelete,
}) => {
	return (
		<div className="flex justify-center gap-2">
			<button
				onClick={() => onView(product)}
				className="p-2 rounded-lg bg-sky-500/20 text-sky-400 hover:bg-sky-500/30 transition"
				title="Visualizar"
			>
				<Eye size={18} />
			</button>

			<button
				onClick={() => onEdit(product)}
				className="p-2 rounded-lg bg-amber-500/20 text-amber-400 hover:bg-amber-500/30 transition"
				title="Editar"
			>
				<Pencil size={18} />
			</button>

			{onDelete && (
				<button
					onClick={() => onDelete(product)}
					className="p-2 rounded-lg bg-red-500/20 text-red-400 hover:bg-red-500/30 transition"
					title="Excluir"
				>
					<Trash2 size={18} />
				</button>
			)}
		</div>
	);
};

export default InventoryActions;