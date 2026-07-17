import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

const banners = [
	{
		image: "/banner/banner.jpg",
		title: "Equipamentos para quem exige máxima performance.",
		description:
			"Soluções desenvolvidas para elevar produtividade, desempenho e eficiência em qualquer ambiente.",
	},
	{
		image: "/banner/baner2.png",
		
		description:
			"Notebooks, desktops e periféricos desenvolvidos para acompanhar seu ritmo de trabalho.",
	},
	{
		image: "/banner/banner3.png",
		title: "Performance que acompanha seus desafios.",
		description:
			"Produtos das principais marcas com qualidade, confiabilidade e alto desempenho.",
	},
	{
		image: "/banner/images.jpeg",
		title: "Seu próximo upgrade começa aqui.",
		description:
			"Descubra equipamentos preparados para entregar velocidade, estabilidade e inovação.",
	},
];

const PromoBanner = () => {
	const [currentBanner, setCurrentBanner] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentBanner((prev) => (prev + 1) % banners.length);
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<section className="w-full pt-1 pb-8">
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				className="relative overflow-hidden h-[650px] group"
			>
				{/* Imagem */}
				<AnimatePresence mode="wait">
					<motion.img
						key={currentBanner}
						src={banners[currentBanner].image}
						alt={banners[currentBanner].title}
						initial={{ x: 200, opacity: 0 }}
						animate={{ x: 0, opacity: 1 }}
						exit={{ x: -200, opacity: 0 }}
						transition={{
							duration: 1,
							ease: "easeInOut",
						}}
						className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
					/>
				</AnimatePresence>

				<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

				<div className="relative z-10 flex items-center h-full w-full">
					<AnimatePresence mode="wait">
						<motion.div
                            key={currentBanner}
                            initial={{ x: -300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: 300, opacity: 0 }}
                            transition={{
                                duration: 0.9,
                                ease: "easeInOut",
                            }}
                            className="max-w-2xl pl-20"
                        >
							<span className="uppercase tracking-[0.35em] text-emerald-400 font-semibold mb-4 block">
								Tecnologia Premium
							</span>

							<h2 className="text-6xl font-black leading-tight text-white">
								{banners[currentBanner].title}
							</h2>

							<p className="mt-6 text-xl text-gray-200 leading-relaxed">
								{banners[currentBanner].description}
							</p>

							<button
								className="
									mt-10
									flex
									items-center
									gap-3
									bg-emerald-500
									hover:bg-emerald-400
									transition-all
									duration-300
									px-8
									py-4
									rounded-full
									font-semibold
									text-lg
									shadow-xl
									hover:scale-105
								"
							>
								Conhecer produtos
								<ArrowRight size={22} />
							</button>
						</motion.div>
					</AnimatePresence>
				</div>

				{/* Indicadores */}
				<div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
					{banners.map((_, index) => (
						<button
							key={index}
							onClick={() => setCurrentBanner(index)}
							className={`transition-all duration-300 rounded-full ${
								index === currentBanner
									? "w-10 h-3 bg-emerald-400"
									: "w-3 h-3 bg-white/60 hover:bg-white"
							}`}
						/>
					))}
				</div>
			</motion.div>
		</section>
	);
};

export default PromoBanner;