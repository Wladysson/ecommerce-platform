import { motion } from "framer-motion";
import {
	Package,
	BadgeCheck,
	Tag,
	Cpu,
	ImageOff,
} from "lucide-react";

const ProductPreview = ({ product }) => {
	const specificationCount = Object.values(
		product.specifications || {}
	).filter((value) => {
		if (typeof value === "boolean") return value;
		return value !== "" && value !== null && value !== undefined;
	}).length;

	return (
		<motion.div
			initial={{ opacity: 0, x: 20 }}
			animate={{ opacity: 1, x: 0 }}
			className="sticky top-6 rounded-2xl border border-gray-700 bg-gray-800 shadow-lg overflow-hidden"
		>
			<div className="border-b border-gray-700 px-6 py-4">
				<h2 className="text-xl font-semibold text-white">
					Pré-visualização
				</h2>

				<p className="mt-1 text-sm text-gray-400">
					Confira como o produto ficará cadastrado.
				</p>
			</div>

			<div className="p-6">

				<div className="flex h-64 items-center justify-center rounded-xl border border-gray-700 bg-gray-900">

					{product.image ? (
						<img
							src={product.image}
							alt={product.name}
							className="max-h-full max-w-full object-contain"
						/>
					) : (
						<div className="text-center">

							<ImageOff
								size={50}
								className="mx-auto mb-3 text-gray-500"
							/>

							<p className="text-gray-400">
								Sem imagem
							</p>

						</div>
					)}

				</div>

				<div className="mt-6">

					<h3 className="line-clamp-2 text-xl font-semibold text-white">
						{product.name || "Nome do Produto"}
					</h3>

					<p className="mt-2 line-clamp-3 text-sm text-gray-400">
						{product.description ||
							"Descrição do produto aparecerá aqui."}
					</p>

				</div>

				<div className="mt-6 text-3xl font-bold text-emerald-400">
					{product.price
						? `R$ ${Number(product.price).toLocaleString(
								"pt-BR",
								{
									minimumFractionDigits: 2,
								}
						  )}`
						: "R$ 0,00"}
				</div>

				<div className="mt-8 space-y-3">

					<div className="flex items-center justify-between rounded-lg bg-gray-700/50 px-4 py-3">

						<div className="flex items-center gap-2 text-gray-300">
							<Package size={18} />
							Categoria
						</div>

						<span className="font-medium text-white">
							{product.category || "-"}
						</span>

					</div>

					<div className="flex items-center justify-between rounded-lg bg-gray-700/50 px-4 py-3">

						<div className="flex items-center gap-2 text-gray-300">
							<Tag size={18} />
							Marca
						</div>

						<span className="font-medium text-white">
							{product.brand || "-"}
						</span>

					</div>

					<div className="flex items-center justify-between rounded-lg bg-gray-700/50 px-4 py-3">

						<div className="flex items-center gap-2 text-gray-300">
							<Cpu size={18} />
							Especificações
						</div>

						<span className="font-medium text-emerald-400">
							{specificationCount}
						</span>

					</div>

					<div className="flex items-center justify-between rounded-lg bg-gray-700/50 px-4 py-3">

						<div className="flex items-center gap-2 text-gray-300">
							<BadgeCheck size={18} />
							Destaque
						</div>

						<span
							className={`rounded-full px-3 py-1 text-xs font-semibold ${
								product.featuredBrand
									? "bg-emerald-500/20 text-emerald-400"
									: "bg-gray-600 text-gray-300"
							}`}
						>
							{product.featuredBrand
								? "SIM"
								: "NÃO"}
						</span>

					</div>

				</div>

				<div className="mt-8 rounded-xl border border-dashed border-gray-600 bg-gray-900 p-4">

					<p className="mb-3 text-sm font-semibold text-white">
						Status do Cadastro
					</p>

					<div className="space-y-2 text-sm">

						<p
							className={
								product.name
									? "text-emerald-400"
									: "text-red-400"
							}
						>
							{product.name
								? "✓ Nome informado"
								: "✗ Nome pendente"}
						</p>

						<p
							className={
								product.category
									? "text-emerald-400"
									: "text-red-400"
							}
						>
							{product.category
								? "✓ Categoria selecionada"
								: "✗ Categoria pendente"}
						</p>

						<p
							className={
								product.price
									? "text-emerald-400"
									: "text-red-400"
							}
						>
							{product.price
								? "✓ Preço informado"
								: "✗ Preço pendente"}
						</p>

						<p
							className={
								product.image
									? "text-emerald-400"
									: "text-red-400"
							}
						>
							{product.image
								? "✓ Imagem enviada"
								: "✗ Imagem pendente"}
						</p>

					</div>

				</div>

			</div>
		</motion.div>
	);
};

export default ProductPreview;