import { useMemo } from "react";

const useInventoryAnalytics = (products = []) => {
	return useMemo(() => {
		const totalProducts = products.length;

		const totalStock = products.reduce(
			(total, product) => total + (product.stock || 0),
			0
		);

		const lowStock = products.filter(
			(product) => product.stock > 0 && product.stock <= 10
		).length;

		const outOfStock = products.filter(
			(product) => product.stock === 0
		).length;

		const totalValue = products.reduce(
			(total, product) =>
				total + (product.price || 0) * (product.stock || 0),
			0
		);

		const averagePrice =
			totalProducts > 0
				? products.reduce(
						(total, product) => total + (product.price || 0),
						0
				  ) / totalProducts
				: 0;

		return {
			totalProducts,
			totalStock,
			lowStock,
			outOfStock,
			totalValue,
			averagePrice,
		};
	}, [products]);
};

export default useInventoryAnalytics;