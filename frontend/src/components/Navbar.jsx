import { ShoppingCart, UserPlus, LogIn, LogOut, Lock, Search } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useUserStore } from "../stores/useUserStore";
import { useCartStore } from "../stores/useCartStore";

const Navbar = () => {
	const { user, logout } = useUserStore();
	const isAdmin = user?.role === "admin";
	const { cart } = useCartStore();

	const [search, setSearch] = useState("");
	const navigate = useNavigate();


	function handleSearch(e) {
		e.preventDefault();

		if(search.trim()) {
			navigate(`/search?query=${search}`);
		}
	}

	return (
		<header className="
			fixed top-0 left-0 w-full 
			bg-gray-900 bg-opacity-90 
			backdrop-blur-md 
			shadow-lg 
			z-40 
			border-b border-emerald-800
		">

			<div className="container mx-auto px-4 py-3">

				<div className="
					flex 
					items-center 
					gap-6
				">
					<Link 
						to="/" 
						className="
							text-2xl 
							font-bold 
							text-emerald-400
							whitespace-nowrap
						"
					>
						Wladyson.COM
					</Link>

					<form 
						onSubmit={handleSearch}
						className="
							flex-1
							max-w-xl
						"
					>

						<div className="
							flex
							items-center
							bg-white
							rounded-lg
							overflow-hidden
						">
							<input
								type="text"
								value={search}
								onChange={(e)=>setSearch(e.target.value)}
								placeholder="Buscar produtos..."
								className="
									flex-1
									px-4
									py-1
									text-gray-900
									outline-none
								"
							/>

							<button
								className="
									bg-emerald-600
									hover:bg-emerald-700
									text-white
									px-4
									py-1
								"
							>

								<Search size={20}/>

							</button>


						</div>

					</form>

					<nav className="
						flex 
						items-center 
						gap-4
						whitespace-nowrap
						ml-auto
					">
						<Link
							to="/"
							className="
								text-gray-300 
								hover:text-emerald-400
							"
						>
							Home
						</Link>

						{user && (

							<Link
								to="/cart"
								className="
									relative
									text-gray-300
									hover:text-emerald-400
									flex
									items-center
								"
							>

								<ShoppingCart size={20}/>

								<span className="ml-1 hidden sm:inline">
									Carrinho
								</span>


								{cart.length > 0 && (

									<span
										className="
											absolute
											-top-2
											-left-2
											bg-emerald-500
											text-white
											rounded-full
											text-xs
											px-2
											py-0.5
										"
									>
										{cart.length}
									</span>

								)}

							</Link>

						)}

						{isAdmin && (

							<Link
								to="/secret-dashboard"
								className="
									bg-emerald-700
									hover:bg-emerald-600
									text-white
									px-3
									py-2
									rounded-md
									flex
									items-center
								"
							>

								<Lock size={18}/>

								<span className="ml-1 hidden sm:inline">
									Administração
								</span>

							</Link>

						)}

						{user ? (

							<button
								onClick={logout}
								className="
									bg-gray-700
									hover:bg-gray-600
									text-white
									px-4
									py-2
									rounded-md
									flex
									items-center
								"
							>

								<LogOut size={18}/>

								<span className="ml-2 hidden sm:inline">
									Sair
								</span>

							</button>


						) : (

							<>

								<Link
									to="/signup"
									className="
										bg-emerald-600
										hover:bg-emerald-700
										text-white
										px-4
										py-2
										rounded-md
										flex
										items-center
									"
								>

									<UserPlus size={18}/>

									<span className="ml-2 hidden sm:inline">
										Cadastre-se
									</span>

								</Link>



								<Link
									to="/login"
									className="
										bg-gray-700
										hover:bg-gray-600
										text-white
										px-4
										py-2
										rounded-md
										flex
										items-center
									"
								>

									<LogIn size={18}/>

									<span className="ml-2 hidden sm:inline">
										Login
									</span>

								</Link>

							</>

						)}


					</nav>


				</div>

			</div>

		</header>
	);
};

export default Navbar;