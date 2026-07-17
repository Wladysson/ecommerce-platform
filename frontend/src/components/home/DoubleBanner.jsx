import { motion } from "framer-motion";

const brands = [
	"/brands/apple.svg",
	"/brands/dell.svg",
	"/brands/asus.svg",
	"/brands/acer.svg",
	"/brands/hp.svg",
	"/brands/lenovo.svg",
	"/brands/intel.svg",
	"/brands/amd.svg",
	"/brands/nvidia.svg",
	"/brands/logitech.svg",
	"/brands/msi.svg",
	"/brands/samsung.svg",
];

const BrandSection = () => {
	return (
		<section className="relative py-28 overflow-hidden">

			{/* Fundo */}

			<div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />

			{/* Glow */}

			<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-emerald-500/5 rounded-full blur-[180px]" />

			<div className="relative z-10 max-w-7xl mx-auto px-8">

				<div className="text-center">

					<motion.span
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						className="uppercase tracking-[0.4em] text-emerald-400 font-semibold"
					>
						Parceiros Oficiais
					</motion.span>

					<motion.h2
						initial={{ opacity: 0, y: 25 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: .1 }}
						viewport={{ once: true }}
						className="mt-5 text-5xl font-black text-white"
					>
						As maiores marcas do mundo.
					</motion.h2>

					<motion.p
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: .2 }}
						viewport={{ once: true }}
						className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-gray-400"
					>
						Selecionamos fabricantes reconhecidos internacionalmente para
						oferecer tecnologia de ponta, desempenho consistente e
						confiabilidade em cada produto disponível em nossa plataforma.
					</motion.p>

				</div>

				{/* Container */}

				<div className="
					relative
					mt-20
					overflow-hidden
					rounded-[32px]
					bg-white/[0.03]
					border
					border-white/10
					backdrop-blur-xl
					py-10
				">

					{/* Fade esquerdo */}

					<div className="absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent z-20" />

					{/* Fade direito */}

					<div className="absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-[#050505] via-[#050505]/80 to-transparent z-20" />

					<div className="marquee">

						<div className="marquee-content">

							{[...brands, ...brands].map((brand, index) => (

								<div
									key={index}
									className="
										w-56
										h-28
										flex
										items-center
										justify-center
										flex-shrink-0
										group
									"
								>

									<img
										src={brand}
										alt=""
										className="
											max-h-14
											max-w-[160px]
											object-contain
											opacity-50
											grayscale
											transition-all
											duration-500
											group-hover:opacity-100
											group-hover:grayscale-0
											group-hover:scale-110
										"
									/>

								</div>

							))}

						</div>

					</div>

				</div>

			</div>

		</section>
	);
};

export default BrandSection;