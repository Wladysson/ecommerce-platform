import { useEffect } from "react";

import CategoryItem from "../components/CategoryItem";
import FeaturedProducts from "../components/FeaturedProducts";
import PromoBanner from "../components/home/PromoBanner";
import PromoGrid from "../components/home/PromoGrid";
import BrandSection from "../components/home/BrandSection";
import DoubleBanner from "../components/home/DoubleBanner";
import Newsletter from "../components/home/Newsletter";

import { useProductStore } from "../stores/useProductStore";


const categories = [
	{ href: "/Monitores", name: "Monitores", description: "Imagens Ultranítidas com Precisão.", imageUrl: "/mon.png" },
	{ href: "/Computadores", name: "Desktops", description: "Configurações para sua Necessidade.", imageUrl: "/pc.jpg" },
	{ href: "/Notebooks", name: "Notebooks", description: "Mobilidade e Performance.", imageUrl: "/notebooks.jpg" },
	{ href: "/Cadeiras", name: "Escritório", description: "Sofisticação e Conforto Premium.", imageUrl: "/cadeira.jpg" },
	{ href: "/Smartphones", name: "Smartphones", description: "Eficiência para acompanhar sua rotina.", imageUrl: "/celular.jpg" },
	{ href: "/Placas de Video", name: "Placas de Video", description: "Desempenho Primordial.", imageUrl: "/nv.jpg" },
	{ href: "/Armazenamento", name: "Armazenamento", description: "Excelência em Leitura para o dia a dia.", imageUrl: "/nvme.jpg" },
	{ href: "/Memorias", name: "Memórias", description: "Velocidade e Confiança para sua Máquina.", imageUrl: "/mem.jpeg" },
	{ href: "/Roteadores", name: "Roteadores", description: "Estabilidade e Conectividade para toda família.", imageUrl: "/hu.jpg" },
	{ href: "/Impressoras", name: "Impressoras", description: "Qualidade para seus Projetos.", imageUrl: "/impressora.jpg" },
	{ href: "/Webcams", name: "Webcams", description: "Capture Momentos em Alta Definição.", imageUrl: "/webcam.png" },
	{ href: "/Acessorios", name: "Acessórios", description: "Para cada Personalidade.", imageUrl: "/acessorios.png" },
];


const HomePage = () => {


	const {
		fetchFeaturedProducts,
		products,
		loading,
	} = useProductStore();



	useEffect(() => {

		fetchFeaturedProducts();

	}, [fetchFeaturedProducts]);



	return (

		<div className="
			relative
			min-h-screen
			text-white
			overflow-hidden
		">


			<div className="
				relative
				z-10
				max-w-7xl
				mx-auto
				px-4
				sm:px-6
				lg:px-8
				pt-8
				pb-16
			">


				<p className="
					text-center
					text-xl
					text-gray-300
					mb-12
				">

					Encontre tecnologia de alto desempenho para transformar sua rotina com mais produtividade, eficiência e conforto.

				</p>



				<div className="
					grid
					grid-cols-1
					sm:grid-cols-2
					lg:grid-cols-3
					gap-4
				">


					{categories.map((category) => (

						<CategoryItem

							key={category.name}

							category={category}

						/>

					))}


				</div>



				{!loading && products.length > 0 && (

					<FeaturedProducts

						featuredProducts={products}

					/>

				)}



			</div>



			<PromoBanner />


			<PromoGrid />


			<BrandSection />


			<DoubleBanner />


			<Newsletter />


		</div>

	);

};


export default HomePage;