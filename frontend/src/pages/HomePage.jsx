import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import CategoryItem from "../components/CategoryItem";
import { useProductStore } from "../stores/useProductStore";
import FeaturedProducts from "../components/FeaturedProducts";

const categories = [
	{ href: "/Monitores", name: "Monitores", description:"Imagens Ultranítidas com Precisão.", imageUrl: "/mon.png" },
	{ href: "/Computadores", name: "Desktops", description: "Configurações para sua Necessidade.", imageUrl: "/pc.jpg" },
	{ href: "/Notebooks", name: "Notebooks", description: "Mobilidade e Performance.", imageUrl: "/notebooks.jpg" },
	{ href: "/Cadeiras", name: "Escritório",description: "Sofisticação e Conforto Premium.", imageUrl: "/cadeira.jpg" },
	{ href: "/Smartphones", name: "Smartphones", description: "Eficiência para acompanhar sua rotina.", imageUrl: "/celular.jpg" },
	{ href: "/Placas de Video", name: "Placas de Video", description: "Desempenho Primordial.", imageUrl: "/nv.jpg" },
	{ href: "/Armazenamento", name: "Armazenamento", description: "Excelência em Leitura para o dia a dia.", imageUrl: "/nvme.jpg" },
	{ href: "/Memorias", name: "Memórias", description: "Velocidade e Confiança para sua Máquina.", imageUrl: "/mem.jpeg" },
	{ href: "/Roteadores", name: "Roteadores", description: "Estabilidade e Conectividade para toda família.", imageUrl: "/hu.jpg" },
	{ href: "/Impressoras", name: "Impressoras", description: "Qualidade para seus Projetos.", imageUrl: "/impressora.jpg" },
	{ href: "/Webcams", name: "Webcams", description: "Capture Momentos em Alta Definição.", imageUrl: "/webcam.png" },
	{ href: "/Acessorios", name: "Acessórios", description: "para cada Personalidade.", imageUrl: "/acessorios.png" },
	
];

const HomePage = () => {
	const [search, setSearch] = useState("");

	const { fetchFeaturedProducts, products, isLoading } = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	return (
		<div className='relative min-h-screen text-white overflow-hidden'>
			<div className='relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1 pb-16'>

				<div className='max-w-lg mx-auto mb-8 relative'>
					<Search 
						className='absolute left-3 top-2.5 text-gray-500'
						size={18}
					/>

					<input
						type='text'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						placeholder='Pesquisar...'
						className='
							w-full
							pl-10
							pr-4
							py-2
							rounded-full
							bg-white
							border
							border-gray-300
							text-gray-900
							placeholder-gray-500
							text-sm
							focus:outline-none
							focus:ring-2
							focus:ring-emerald-500
						'
					/>
				</div>

				<p className='text-center text-xl text-gray-300 mb-12'>
				Encontre tecnologia de alto desempenho para transformar sua rotina com mais produtividade, eficiência e conforto.
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
