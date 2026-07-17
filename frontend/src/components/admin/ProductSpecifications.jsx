import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import SpecificationField from "./SpecificationField";
import { useProductSpecifications } from "../../hooks/useProductSpecifications";

const ProductSpecifications = ({
	product,
	setProduct,
}) => {
	const specificationGroups =
		useProductSpecifications(product.category);

	const handleChange = (key, value) => {
		setProduct((prev) => ({
			...prev,

			specifications: {
				...prev.specifications,

				[key]: value,
			},
		}));
	};

	if (!product.category) {
		return (
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="rounded-2xl border border-dashed border-gray-600 bg-gray-800 p-10 text-center"
			>
				<Cpu
					size={50}
					className="mx-auto mb-4 text-gray-500"
				/>

				<h2 className="text-xl font-semibold text-white">
					Especificações Técnicas
				</h2>

				<p className="mt-2 text-gray-400">
					Escolha primeiro uma categoria para que
					as especificações sejam carregadas.
				</p>
			</motion.div>
		);
	}

	return (
		<motion.div
			initial={{ opacity: 0, y: 15 }}
			animate={{ opacity: 1, y: 0 }}
			className="rounded-2xl border border-gray-700 bg-gray-800 p-6 shadow-lg"
		>
			<div className="mb-8 flex items-center gap-3">
				<div className="rounded-xl bg-emerald-500/10 p-3">
					<Cpu className="text-emerald-400" />
				</div>

				<div>
					<h2 className="text-xl font-semibold text-white">
						Especificações Técnicas
					</h2>

					<p className="text-sm text-gray-400">
						Informações específicas da categoria.
					</p>
				</div>
			</div>

			<div className="space-y-8">

				{specificationGroups.map((group) => (

					<div key={group.title}>

						<div className="mb-5 flex items-center gap-2">

							<div className="h-5 w-1 rounded bg-emerald-500" />

							<h3 className="text-lg font-semibold text-white">
								{group.title}
							</h3>

						</div>

						<div className="grid grid-cols-1 gap-5 md:grid-cols-2">

							{group.fields.map((field) => (

								<SpecificationField
									key={field.key}
									field={field}
									value={
										product.specifications?.[
											field.key
										]
									}
									onChange={handleChange}
								/>

							))}

						</div>

					</div>

				))}

			</div>
		</motion.div>
	);
};

export default ProductSpecifications;