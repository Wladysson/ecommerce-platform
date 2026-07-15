import axios from "../lib/axios";


const adminService = {

	getDashboard: async(period = "30days") => {

		const response = await axios.get(
			`/admin/dashboard?period=${period}`
		);

		return response.data;

	},



	getAnalytics: async(period = "30days") => {

		const response = await axios.get(
			`/admin/analytics?period=${period}`
		);


		return response.data;

	},

	getProducts: async()=>{


		const response =
			await axios.get(
				"/admin/products"
			);


		return response.data;


	},




	createProduct: async(product)=>{


		const response =
			await axios.post(
				"/admin/products",
				product
			);


		return response.data;


	},




	updateProduct: async(id,data)=>{


		const response =
			await axios.put(
				`/admin/products/${id}`,
				data
			);


		return response.data;


	},




	deleteProduct: async(id)=>{


		const response =
			await axios.delete(
				`/admin/products/${id}`
			);



		return response.data;


	},

	getOrders: async()=>{


		const response =
			await axios.get(
				"/admin/orders"
			);



		return response.data;


	},




	updateOrderStatus:
	async(id,status)=>{


		const response =
			await axios.patch(
				`/admin/orders/${id}`,
				{
					status
				}
			);



		return response.data;


	},

	getCustomers: async()=>{


		const response =
			await axios.get(
				"/admin/customers"
			);



		return response.data;


	},

	getCustomerAnalytics: async()=>{


		const response =
			await axios.get(
				"/admin/customers/analytics"
			);



		return response.data;


	},

	getInventory: async()=>{


		const response =
			await axios.get(
				"/admin/inventory"
			);



		return response.data;


	},




	getLowStockProducts: async()=>{


		const response =
			await axios.get(
				"/admin/inventory/low-stock"
			);



		return response.data;


	},




	updateStock:
	async(productId,quantity)=>{


		const response =
			await axios.patch(
				`/admin/inventory/${productId}`,
				{
					quantity
				}
			);



		return response.data;


	},

	getAlerts: async()=>{


		const response =
			await axios.get(
				"/admin/alerts"
			);



		return response.data;


	},





	getNotifications: async()=>{


		const response =
			await axios.get(
				"/admin/notifications"
			);



		return response.data;


	},


};


export default adminService;