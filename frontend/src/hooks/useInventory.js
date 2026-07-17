import { useEffect } from "react";
import useInventoryStore from "../stores/useInventoryStore";


const useInventory = () => {


	const {
		products,
		selectedProduct,
		inventoryStats,
		loading,
		error,
		filters,
		fetchInventory,
		selectProduct,
		updateProduct,
		setFilters,
		clearFilters,
	} = useInventoryStore();



	useEffect(() => {

		fetchInventory();

	}, [fetchInventory]);



	return {

		products,

		selectedProduct,

		inventoryStats,

		loading,

		error,

		filters,

		fetchInventory,

		selectProduct,

		updateProduct,

		setFilters,

		clearFilters,

	};

};


export default useInventory;