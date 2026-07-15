import { useEffect, useState } from "react";
import adminService from "../services/adminService";


const useInventory = () => {


	const [inventory,setInventory] = useState(null);
	const [lowStock,setLowStock] = useState([]);
	const [loading,setLoading] = useState(true);



	const loadInventory = async()=>{

		try {

			setLoading(true);


			const [
				inventoryData,
				lowStockData
			] = await Promise.all([

				adminService.getInventory(),

				adminService.getLowStockProducts()

			]);



			setInventory(inventoryData);

			setLowStock(lowStockData);



		} finally {

			setLoading(false);

		}

	};



	const updateStock = async(productId,quantity)=>{


		const response =
			await adminService.updateStock(
				productId,
				quantity
			);



		await loadInventory();


		return response;

	};



	useEffect(()=>{

		loadInventory();

	},[]);



	return {

		inventory,

		lowStock,

		loading,

		refresh:loadInventory,

		updateStock,

	};

};


export default useInventory;