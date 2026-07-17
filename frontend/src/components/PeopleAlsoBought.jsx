import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Sparkles } from "lucide-react";
import ProductCard from "./ProductCard";
import axios from "../lib/axios";
import toast from "react-hot-toast";
import LoadingSpinner from "./LoadingSpinner";

const PeopleAlsoBought = () => {
	const [recommendations, setRecommendations] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchRecommendations = async () => {
			try {
				const res = await axios.get("/products/recommendations");
				setRecommendations(res.data);
			} catch (error) {
				toast.error(
					error.response?.data?.message ||
						"Erro ao carregar recomendações."
				);
			} finally {
				setIsLoading(false);
			}
		};

		fetchRecommendations();
	}, []);

	if (isLoading) return <LoadingSpinner />;

	if (!recommendations.length) return null;

	return (
		<motion.section
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			className="mt-12 rounded-2xl border border-gray-700 bg-gray-800/40 p-6"
		>
			<div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

				<div>

					<div className="flex items-center gap-3">

						<div className="rounded-full bg-emerald-500/10 p-3">
							<ShoppingBag
								size={22}
								className="text-emerald-400"
							/>
						</div>

						<div>

							<h2 className="text-2xl font-bold text-white">
								Pessoas também compraram
							</h2>

							<p className="mt-1 text-sm text-gray-400">
								Produtos frequentemente adquiridos junto com os
								itens do seu carrinho.
							</p>

						</div>

					</div>

				</div>

				<div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">

					<Sparkles
						size={16}
						className="text-emerald-400"
					/>

					<span className="text-sm font-medium text-emerald-300">
						{recommendations.length} recomendações
					</span>

				</div>

			</div>

			<div className="mt-6 h-px w-full bg-gradient-to-r from-emerald-500 via-gray-700 to-transparent" />

			<div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{recommendations.map((product, index) => (
					<motion.div
						key={product._id}
						initial={{ opacity: 0, y: 25 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{
							duration: 0.35,
							delay: index * 0.08,
						}}
					>
						<ProductCard product={product} />
					</motion.div>
				))}
			</div>

			<div className="mt-8 flex items-center gap-2 border-t border-gray-700 pt-4">

				<Sparkles
					size={16}
					className="text-emerald-400"
				/>

				<p className="text-sm text-gray-400">
					Essas recomendações são geradas com base nas compras mais
					frequentes dos nossos clientes e podem complementar seu pedido.
				</p>

			</div>
		</motion.section>
	);
};

export default PeopleAlsoBought;