import { motion } from "framer-motion";

const brands = [
	{ name: "Apple", logo: "/brands/apple.png" },
	{ name: "Samsung", logo: "/brands/samsung.png" },
	{ name: "Dell", logo: "/brands/dell.png" },
	{ name: "Lenovo", logo: "/brands/lenovo.png" },
	{ name: "ASUS", logo: "/brands/asus.png" },
	{ name: "Acer", logo: "/brands/acer.png" },
	{ name: "HP", logo: "/brands/hp.png" },
	{ name: "LG", logo: "/brands/lg.png" },
	{ name: "Intel", logo: "/brands/intel.png" },
	{ name: "AMD", logo: "/brands/amd.png" },
	{ name: "NVIDIA", logo: "/brands/nvidia.png" },
	{ name: "Kingston", logo: "/brands/kingston.png" },
];

const BrandSection = () => {
	return (
		<section className="bg-gradient-to-b from-white via-gray-50 to-white py-28">

			<div className="max-w-7xl mx-auto px-8">

				{/* Cabeçalho */}

				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: .8 }}
					className="text-center mb-20"
				>

					<span className="uppercase tracking-[0.35em] text-emerald-600 font-semibold">
						Marcas Parceiras
					</span>

					<h2 className="mt-6 text-5xl font-black text-gray-900">
						As maiores fabricantes do mundo em um único lugar.
					</h2>

					<p className="mt-6 text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
						Trabalhamos com fabricantes reconhecidos mundialmente para
						oferecer equipamentos originais, garantia oficial e tecnologia
						de última geração para empresas, profissionais e consumidores.
					</p>

				</motion.div>

				{/* Logos */}

				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">

					{brands.map((brand, index) => (

						<motion.div
							key={brand.name}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{
								duration: .5,
								delay: index * .05
							}}
							whileHover={{
								y: -10,
								scale: 1.05
							}}
							className="
								bg-white
								rounded-3xl
								h-36
								flex
								items-center
								justify-center
								border
								border-gray-200
								shadow-sm
								hover:shadow-2xl
								transition-all
								duration-300
								group
							"
						>

							<img
								src={brand.logo}
								alt={brand.name}
								className="
									max-h-14
									max-w-[140px]
									object-contain
									grayscale
									opacity-70
									group-hover:grayscale-0
									group-hover:opacity-100
									transition-all
									duration-500
								"
							/>

						</motion.div>

					))}

				</div>

				{/* Rodapé */}

				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					viewport={{ once: true }}
					transition={{ delay: .4 }}
					className="
						mt-24
						bg-gradient-to-r
						from-emerald-600
						to-emerald-500
						rounded-[36px]
						px-14
						py-14
						text-center
						shadow-2xl
					"
				>

					<h3 className="text-4xl font-black text-white">
						Tecnologia desenvolvida pelas melhores marcas.
					</h3>

					<p className="mt-5 text-xl text-emerald-50 max-w-3xl mx-auto">
						Produtos originais, garantia de fábrica, suporte especializado
						e um catálogo cuidadosamente selecionado para entregar
						qualidade em cada compra.
					</p>

				</motion.div>

			</div>

		</section>
	);
};

export default BrandSection;