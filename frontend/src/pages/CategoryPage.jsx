import { useEffect } from "react";
import { useProductStore } from "../stores/useProductStore";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ProductCard from "../components/ProductCard";


const categoryDescriptions = {
	"Monitores": "Imagens mais nítidas e experiências visuais de alto desempenho.",
	"Computadores": "Máquinas potentes para trabalho, criação e alto desempenho.",
	"Notebooks": "Mobilidade e produtividade com tecnologia para todos os momentos.",
	"Cadeiras": "Ergonomia e conforto para longas jornadas com mais desempenho.",
	"Smartphones": "Conectividade, inovação e tecnologia na palma da sua mão.",
	"Placas de Video": "Desempenho gráfico avançado para jogos, criação e produtividade.",
	"Armazenamento": "Mais velocidade e espaço para seus arquivos e aplicações.",
	"Memorias": "Mais agilidade e fluidez para melhorar o desempenho do sistema.",
	"Roteadores": "Conexões rápidas e estáveis para uma experiência online superior.",
};

const CategoryPage = () => {
	const { fetchProductsByCategory, products } = useProductStore();

	const { category } = useParams();

	useEffect(() => {
		fetchProductsByCategory(category);
	}, [fetchProductsByCategory, category]);

	console.log("products:", products);
	return (
		<div className='min-h-screen'>
			<div className='relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<motion.div
					className='text-center mb-8'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
				>
					<h1 className='text-4xl sm:text-5xl font-bold text-emerald-400'>
						{category.charAt(0).toUpperCase() + category.slice(1)}
					</h1>

					<p className='text-gray-300 text-lg mt-3'>
						{categoryDescriptions[category] || "Explore nossos produtos de alta qualidade."}
					</p>
				</motion.div>

				<motion.div
					className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
				>
					{products?.length === 0 && (
						<h2 className='text-3xl font-semibold text-gray-300 text-center col-span-full'>
							No products found
						</h2>
					)}

					{products?.map((product) => (
						<ProductCard key={product._id} product={product} />
					))}
				</motion.div>
			</div>
		</div>
	);
};
export default CategoryPage;
