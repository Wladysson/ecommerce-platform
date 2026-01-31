import { useEffect } from "react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
	{ href: "/Monitores", name: "Monitores", imageUrl: "/mon.jpg" },
	{ href: "/Computadores", name: "Computadores", imageUrl: "/pc.jpg" },
	{ href: "/Notebooks", name: "Notebooks", imageUrl: "/notebook.jpg" },
	{ href: "/Cadeiras", name: "Cadeiras", imageUrl: "/cadeira.jpg" },
	{ href: "/Smartphones", name: "Smartphones", imageUrl: "/celular.jpg" },
	{ href: "/Placas de Video", name: "Placas de Video", imageUrl: "/plac.jpeg" },
	{ href: "/Armazenamento", name: "Armazenamento", imageUrl: "/nvme.jpg" },
	{ href: "/Memorias", name: "Memórias", imageUrl: "/memorias.png" },
	{ href: "/Multiplas Comunicações", name: "Dispositivos IoT", imageUrl: "/roteador.jpg" },
];

const HomePage = () => {
	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16'>
				<h1 className='text-center text-5xl sm:text-6xl font-bold text-emerald-400 mb-4'>
					Vitrine de Produtos
				</h1>
				<p className='text-center text-xl text-gray-300 mb-12'>
					Mais que equipamentos, entregamos produtividade, perfomance e conforto para o seu dia a dia.
				</p>

				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
					{categories.map((category) => (
						<CategoryItem category={category} key={category.name} />
					))}
				</div>

				{!isLoading && products.length > 0 && <FeaturedProducts featuredProducts={products} />}
			</div>
		</div>
	);
};
export default HomePage;
