import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";

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
	const navigate = useNavigate();

	const [search, setSearch] = useState("");

	const {
		fetchFeaturedProducts,
		products,
		loading,
	} = useProductStore();

	useEffect(() => {
		fetchFeaturedProducts();
	}, [fetchFeaturedProducts]);

	const handleSearch = () => {
		const text = search.trim();

		if (!text) return;

		navigate(`/search?query=${encodeURIComponent(text)}`);
	};

	return (
		<div className="relative min-h-screen text-white overflow-hidden">

			<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-1 pb-16">

				<div className="max-w-lg mx-auto mb-8 relative">

					<input
						type="text"
						value={search}
						onChange={(e) => setSearch(e.target.value)}
						onKeyDown={(e) => {
							if (e.key === "Enter") {
								handleSearch();
							}
						}}
						placeholder="Pesquisar produtos..."
						className="
							w-full
							pl-5
							pr-12
							py-3
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
						"
					/>

					<button
						onClick={handleSearch}
						className="
							absolute
							right-3
							top-1/2
							-transform
							-translate-y-1/2
							text-gray-500
							hover:text-emerald-600
							transition
						"
					>
						<Search size={20} />
					</button>

				</div>

				<p className="text-center text-xl text-gray-300 mb-12">
					Encontre tecnologia de alto desempenho para transformar sua rotina com mais produtividade, eficiência e conforto.
				</p>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

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