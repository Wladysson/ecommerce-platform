import { create } from "zustand";
import inventoryService from "../services/inventoryService";


const useInventoryStore = create((set, get) => ({

	products: [],

	selectedProduct: null,


	inventoryStats: {
		totalProducts: 0,
		totalStock: 0,
		lowStock: 0,
		outOfStock: 0,
	},


	loading: false,

	error: null,


	filters: {
		search: "",
		category: "",
		status: "",
	},



	async fetchInventory() {

		set({
			loading: true,
			error: null,
		});


		try {


			const data =
				await inventoryService.getInventory(
					get().filters
				);



			set({

				products: data.products || [],


				inventoryStats: {

					totalProducts:
						data.totalProducts || 0,


					totalStock:
						data.totalStock || 0,


					lowStock:
						data.lowStock || 0,


					outOfStock:
						data.outOfStock || 0,

				},


				loading: false,

			});


		} catch (error) {


			set({

				error: error.message,

				loading: false,

			});


		}

	},




	async fetchProduct(productId) {


		set({

			loading: true,

			error: null,

		});



		try {


			const product =
				await inventoryService.getProduct(
					productId
				);



			set({

				selectedProduct: product,

				loading: false,

			});



		} catch (error) {


			set({

				error: error.message,

				loading: false,

			});


		}

	},




	async updateProduct(productId, payload) {


		set({

			loading: true,

		});



		try {


			const updated =
				await inventoryService.updateProduct(
					productId,
					payload
				);



			set((state) => ({


				products:
					state.products.map(
						(product) =>
							product.id === productId
								?
								updated
								:
								product
					),



				selectedProduct:
					state.selectedProduct?.id === productId
						?
						updated
						:
						state.selectedProduct,



				loading: false,


			}));


			// Atualiza os números do estoque
			await get().fetchInventory();



		} catch (error) {


			set({

				error: error.message,

				loading: false,

			});


		}

	},




	selectProduct(product) {


		set({

			selectedProduct: product,

		});


	},




	setFilters(filters) {


		set((state) => ({


			filters: {

				...state.filters,

				...filters,

			},


		}));


	},




	clearFilters() {


		set({


			filters: {

				search: "",

				category: "",

				status: "",

			},


		});


	},


}));


export default useInventoryStore;