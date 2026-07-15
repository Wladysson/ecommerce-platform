import { useState } from "react";
import { motion } from "framer-motion";
import { Loader, PlusCircle } from "lucide-react";

import { useProductStore } from "../stores/useProductStore";

import ProductBasicInfo from "./admin/ProductBasicInfo";
import ProductBrandSection from "./admin/ProductBrandSection";
import ProductImageUpload from "./admin/ProductImageUpload";
import ProductSpecifications from "./admin/ProductSpecifications";
import ProductPreview from "./admin/ProductPreview";

import {
	createEmptyProduct,
	buildProductPayload,
} from "../utils/productHelpers";

const CreateProductForm = () => {
	const [newProduct, setNewProduct] = useState(
		createEmptyProduct()
	);

	const { createProduct, loading } = useProductStore();

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const payload = buildProductPayload(newProduct);

			await createProduct(payload);

			setNewProduct(createEmptyProduct());
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.5 }}
			className="mx-auto mb-10 max-w-7xl"
		>
			<div className="mb-8">
				<h1 className="text-3xl font-bold text-white">
					Cadastrar Produto
				</h1>

				<p className="mt-2 text-gray-400">
					Preencha todas as informações do produto.
					Quanto mais detalhes forem cadastrados,
					mais completa será a página do produto.
				</p>
			</div>

			<form onSubmit={handleSubmit}>

				<div className="grid grid-cols-1 gap-8 xl:grid-cols-3">

					<div className="space-y-8 xl:col-span-2">

						<ProductBasicInfo
							product={newProduct}
							setProduct={setNewProduct}
						/>

						<ProductBrandSection
							product={newProduct}
							setProduct={setNewProduct}
						/>

						<ProductImageUpload
							product={newProduct}
							setProduct={setNewProduct}
						/>

						<ProductSpecifications
							product={newProduct}
							setProduct={setNewProduct}
						/>

					</div>

					<div>

						<ProductPreview
							product={newProduct}
						/>

					</div>

				</div>

				<div className="mt-8">

					<button
						type="submit"
						disabled={loading}
						className="
							flex
							w-full
							items-center
							justify-center
							rounded-xl
							bg-emerald-600
							px-6
							py-4
							text-lg
							font-semibold
							text-white
							transition
							hover:bg-emerald-700
							disabled:cursor-not-allowed
							disabled:opacity-60
						"
					>

						{loading ? (
							<>
								<Loader
									size={20}
									className="mr-3 animate-spin"
								/>

								Cadastrando Produto...
							</>
						) : (
							<>
								<PlusCircle
									size={20}
									className="mr-3"
								/>

								Cadastrar Produto
							</>
						)}

					</button>

				</div>

			</form>

		</motion.div>
	);
};

export default CreateProductForm;