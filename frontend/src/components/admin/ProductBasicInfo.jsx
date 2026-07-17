import { motion } from "framer-motion";
import SpecificationField from "./SpecificationField";
import { Package } from "lucide-react";
import { PRODUCT_CATEGORIES } from "../../constants/productCategories";

const ProductBasicInfo = ({ product, setProduct }) => {
	const handleChange = (key, value) => {
		setProduct((prev) => ({
			...prev,
			[key]: value,
		}));
	};

	const fields = [
		{
			key: "name",
			label: "Nome do Produto",
			type: "text",
			required: true,
			placeholder: "Ex.: Notebook Dell G15 RTX 4060",
		},
		{
			key: "description",
			label: "Descrição",
			type: "textarea",
			required: true,
			placeholder: "Faça uma descrição completa do produto...",
		},
		{
			key: "price",
			label: "Preço",
			type: "number",
			required: true,
			placeholder: "0,00",
		},
		{
			key: "category",
			label: "Categoria",
			type: "select",
			required: true,
			options: PRODUCT_CATEGORIES,
		},
	];

	return (
		<motion.div
			initial={{ opacity: 0, y: 15 }}
			animate={{ opacity: 1, y: 0 }}
			className="rounded-2xl border border-gray-700 bg-gray-800 p-6 shadow-lg"
		>
			<div className="mb-6 flex items-center gap-3">
				<div className="rounded-xl bg-emerald-500/10 p-3">
					<Package className="text-emerald-400" />
				</div>

				<div>
					<h2 className="text-xl font-semibold text-white">
						Informações Básicas
					</h2>

					<p className="text-sm text-gray-400">
						Dados principais do produto.
					</p>
				</div>
			</div>

			<div className="space-y-5">
				{fields.map((field) => (
					<SpecificationField
						key={field.key}
						field={field}
						value={product[field.key]}
						onChange={handleChange}
					/>
				))}
			</div>
		</motion.div>
	);
};

export default ProductBasicInfo;