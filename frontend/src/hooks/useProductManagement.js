import { useState } from "react";
import adminService from "../services/adminService";


const useProductManagement = () => {


	const [products, setProducts] = useState([]);
	const [loading, setLoading] = useState(false);



	const fetchProducts = async () => {

		try {

			setLoading(true);

			const data = await adminService.getProducts();

			setProducts(data);


		} finally {

			setLoading(false);

		}

	};



	const createProduct = async(product)=>{

		setLoading(true);

		try {

			const response =
				await adminService.createProduct(product);


			setProducts((prev)=>[
				...prev,
				response
			]);


			return response;


		} finally {

			setLoading(false);

		}

	};



	const updateProduct = async(id,data)=>{

		const response =
			await adminService.updateProduct(id,data);


		setProducts((prev)=>
			prev.map(product=>
				product.id === id
				? response
				: product
			)
		);


		return response;

	};



	const deleteProduct = async(id)=>{

		await adminService.deleteProduct(id);


		setProducts((prev)=>
			prev.filter(
				product=>product.id !== id
			)
		);

	};



	return {
		products,
		loading,
		fetchProducts,
		createProduct,
		updateProduct,
		deleteProduct,
	};

};


export default useProductManagement;