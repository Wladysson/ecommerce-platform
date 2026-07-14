import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const cards = [
	{
		title: "Monitores Gamer",
		subtitle: "144Hz • 165Hz • 240Hz",
		image: "/banner/grid-monitor.jpg",
		size: "large",
	},
	{
		title: "Notebooks",
		subtitle: "Mobilidade para qualquer desafio",
		image: "/banner/grid-notebook.jpg",
	},
	{
		title: "Periféricos",
		subtitle: "Precisão em cada movimento",
		image: "/banner/grid-perifericos.jpg",
	},
	{
		title: "Smartphones",
		subtitle: "Tecnologia na palma da mão",
		image: "/banner/grid-phone.jpg",
	},
	{
		title: "Acessórios",
		subtitle: "Complete seu setup",
		image: "/banner/grid-acessorios.jpg",
	},
];

const PromoGrid = () => {
	return (
		<section className="w-full bg-black py-20">
			<div className="max-w-7xl mx-auto px-8">

				<div className="mb-12">
					<span className="text-emerald-400 uppercase tracking-[0.3em] font-semibold">
						Destaques
					</span>

					<h2 className="text-5xl font-black text-white mt-4">
						Explore nossas principais categorias
					</h2>

					<p className="text-gray-400 text-lg mt-4 max-w-3xl">
						Produtos selecionados para oferecer desempenho,
						confiabilidade e tecnologia para profissionais,
						gamers e empresas.
					</p>
				</div>

				<div className="grid grid-cols-12 gap-6">

					{/* Card Grande */}
					<motion.div
						whileHover={{ scale: 1.02 }}
						className="col-span-12 lg:col-span-6 row-span-2 relative overflow-hidden h-[620px] cursor-pointer"
					>
						<img
							src={cards[0].image}
							className="absolute inset-0 w-full h-full object-cover transition duration-700 hover:scale-110"
							alt=""
						/>

						<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"/>

						<div className="absolute bottom-10 left-10">

							<p className="text-emerald-400 uppercase tracking-widest font-semibold">
								{cards[0].subtitle}
							</p>

							<h3 className="text-5xl font-black text-white mt-3">
								{cards[0].title}
							</h3>

							<button className="mt-8 flex items-center gap-2 text-white font-semibold group">
								Ver produtos

								<ArrowRight
									size={22}
									className="group-hover:translate-x-2 transition"
								/>
							</button>

						</div>

					</motion.div>

					{/* Cards menores */}

					{cards.slice(1).map((card) => (

						<motion.div
							key={card.title}
							whileHover={{ scale: 1.03 }}
							className="col-span-12 sm:col-span-6 lg:col-span-3 relative overflow-hidden h-[295px] cursor-pointer"
						>

							<img
								src={card.image}
								className="absolute inset-0 w-full h-full object-cover transition duration-700 hover:scale-110"
								alt=""
							/>

							<div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"/>

							<div className="absolute bottom-8 left-8">

								<p className="text-gray-300 text-sm uppercase tracking-widest">
									{card.subtitle}
								</p>

								<h3 className="text-3xl font-bold text-white mt-2">
									{card.title}
								</h3>

							</div>

						</motion.div>

					))}

				</div>

			</div>
		</section>
	);
};

export default PromoGrid;