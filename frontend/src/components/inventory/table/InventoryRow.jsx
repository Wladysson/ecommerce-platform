import InventoryActions from "./InventoryActions";
import StockBadge from "../stock/StockBadge";

const InventoryRow = ({ product, onView, onEdit }) => {
	const {
		name,
		image,
		category,
		price,
		stock = 0,
	} = product;

	return (
		<tr className="border-t border-gray-700 hover:bg-gray-750 transition-colors">
			<td className="px-6 py-4">
				<div className="flex items-center gap-4">
					<img
						src={image}
						alt={name}
						className="w-14 h-14 rounded-lg object-cover bg-gray-900"
					/>

					<div>
						<h3 className="text-white font-medium">
							{name}
						</h3>

						<p className="text-sm text-gray-400">
							ID: {product.id}
						</p>
					</div>
				</div>
			</td>

			<td className="px-6 py-4 text-gray-300">
				{category}
			</td>

			<td className="px-6 py-4 text-white font-medium">
				R$ {price.toFixed(2)}
			</td>

			<td className="px-6 py-4 text-gray-300">
				{stock}
			</td>

			<td className="px-6 py-4">
				<StockBadge stock={stock} />
			</td>

			<td className="px-6 py-4">
				<InventoryActions
					product={product}
					onView={onView}
					onEdit={onEdit}
				/>
			</td>
		</tr>
	);
};

export default InventoryRow;