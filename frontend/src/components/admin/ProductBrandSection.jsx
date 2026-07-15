import { motion } from "framer-motion";
import { Award } from "lucide-react";
import SpecificationField from "./SpecificationField";
import { PRODUCT_BRANDS } from "../../constants/productBrands";

const ProductBrandSection = ({ product, setProduct }) => {
	const handleChange = (key, value) => {
		setProduct((prev) => ({
			...prev,
			[key]: value,
		}));
	};

	const brands =
		PRODUCT_BRANDS[product.category] || [];

	return (
		<motion.div
			initial={{ opacity: 0, y: 15 }}
			animate={{ opacity: 1, y: 0 }}
			className="rounded-2xl border border-gray-700 bg-gray-800 p-6 shadow-lg"
		>
			<div className="mb-6 flex items-center gap-3">
				<div className="rounded-xl bg-emerald-500/10 p-3">
					<Award className="text-emerald-400" />
				</div>

				<div>
					<h2 className="text-xl font-semibold text-white">
						Marca e Fabricante
					</h2>

					<p className="text-sm text-gray-400">
						Informações relacionadas à marca do produto.
					</p>
				</div>
			</div>

			<div className="space-y-5">

				<SpecificationField
					field={{
						key: "brand",
						label: "Marca",
						type: "select",
						required: true,
						options: brands,
					}}
					value={product.brand}
					onChange={handleChange}
				/>

				<SpecificationField
					field={{
						key: "manufacturer",
						label: "Fabricante",
						type: "text",
						placeholder: "Ex.: Dell Technologies",
					}}
					value={product.manufacturer}
					onChange={handleChange}
				/>

				<SpecificationField
					field={{
						key: "featuredBrand",
						label: "Marca em Destaque",
						type: "checkbox",
						checkboxLabel:
							"Exibir esta marca na página inicial",
					}}
					value={product.featuredBrand}
					onChange={handleChange}
				/>

			</div>
		</motion.div>
	);
};

export default ProductBrandSection;