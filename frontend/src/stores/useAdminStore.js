import { create } from "zustand";
import adminService from "../services/adminService";


export const useAdminStore = create((set) => ({

	analytics: null,

	orders: [],

	customers: [],

	products: [],

	alerts: [],

	notifications: [],

	loading: false,


	getDashboardData: async (period = "30days") => {

		try {

			set({
				loading: true
			});


			const response =
				await adminService.getDashboard(period);



			set({

				analytics:
					response.analytics || null,


				orders:
					response.orders || [],


				customers:
					response.customers || [],


				products:
					response.products || [],


				alerts:
					response.alerts || [],


				notifications:
					response.notifications || [],


			});


		} catch(error) {


			console.error(
				"Erro ao carregar dashboard:",
				error
			);


		} finally {


			set({

				loading:false

			});


		}

	},



	getOrders: async()=>{

		const orders =
			await adminService.getOrders();


		set({

			orders

		});

	},



	getCustomers: async()=>{


		const customers =
			await adminService.getCustomers();



		set({

			customers

		});


	},



	getProducts: async()=>{


		const products =
			await adminService.getProducts();



		set({

			products

		});


	},



	createProduct: async(product)=>{


		const created =
			await adminService.createProduct(
				product
			);



		set((state)=>({

			products:[
				...state.products,
				created
			]

		}));


		return created;

	},



	removeProduct: async(id)=>{


		await adminService.deleteProduct(id);



		set((state)=>({

			products:
				state.products.filter(
					product=>product.id !== id
				)

		}));


	},



	refreshDashboard: async()=>{


		const response =
			await adminService.getDashboard();



		set({

			analytics:
				response.analytics,


			alerts:
				response.alerts,


			notifications:
				response.notifications,


		});


	}


}));