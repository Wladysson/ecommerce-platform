import axios from "../lib/axios";


const BASE_URL = "/admin/inventory";


const inventoryService = {


	async getInventory(params = {}) {

		const { data } = await axios.get(
			BASE_URL,
			{
				params,
			}
		);


		return data;

	},



	async getProduct(productId) {

		const { data } = await axios.get(
			`${BASE_URL}/${productId}`
		);


		return data;

	},



	async updateProduct(productId, payload) {

		const { data } = await axios.put(
			`${BASE_URL}/${productId}`,
			payload
		);


		return data;

	},


};


export default inventoryService;