import { motion } from "framer-motion";
import { ImagePlus, CheckCircle } from "lucide-react";

const ProductImageUpload = ({ product, setProduct }) => {
	const handleImageChange = (e) => {
		const file = e.target.files[0];

		if (!file) return;

		const reader = new FileReader();

		reader.onloadend = () => {
			setProduct((prev) => ({
				...prev,
				image: reader.result,
			}));
		};

		reader.readAsDataURL(file);
	};

	return (
		<motion.div
			initial={{ opacity: 0, y: 15 }}
			animate={{ opacity: 1, y: 0 }}
			className="rounded-2xl border border-gray-700 bg-gray-800 p-6 shadow-lg"
		>
			<div className="mb-6 flex items-center gap-3">
				<div className="rounded-xl bg-emerald-500/10 p-3">
					<ImagePlus className="text-emerald-400" />
				</div>

				<div>
					<h2 className="text-xl font-semibold text-white">
						Imagem do Produto
					</h2>

					<p className="text-sm text-gray-400">
						Faça upload da imagem principal do produto.
					</p>
				</div>
			</div>

			<input
				id="product-image"
				type="file"
				accept="image/*"
				onChange={handleImageChange}
				className="hidden"
			/>

			<label
				htmlFor="product-image"
				className="
					flex
					cursor-pointer
					flex-col
					items-center
					justify-center
					rounded-xl
					border-2
					border-dashed
					border-gray-600
					bg-gray-700/50
					p-8
					transition
					hover:border-emerald-500
					hover:bg-gray-700
				"
			>
				{product.image ? (
					<>
						<img
							src={product.image}
							alt="Preview"
							className="mb-4 h-40 rounded-lg object-contain"
						/>

						<div className="flex items-center gap-2 text-emerald-400">
							<CheckCircle size={18} />
							Imagem carregada
						</div>
					</>
				) : (
					<>
						<ImagePlus
							size={48}
							className="mb-3 text-gray-400"
						/>

						<p className="font-medium text-white">
							Clique para selecionar uma imagem
						</p>

						<p className="mt-1 text-sm text-gray-400">
							JPG, PNG ou WEBP
						</p>
					</>
				)}
			</label>
		</motion.div>
	);
};

export default ProductImageUpload;