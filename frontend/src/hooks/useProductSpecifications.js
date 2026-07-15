import { useMemo } from "react";
import { PRODUCT_SPECIFICATIONS } from "../constants/productSpecifications";

const EMPTY_SPECIFICATIONS = [];

export const useProductSpecifications = (category) => {
	return useMemo(() => {
		if (!category) return EMPTY_SPECIFICATIONS;

		const specifications = PRODUCT_SPECIFICATIONS[category];

		if (!specifications) {
			console.warn(
				`Nenhuma especificação cadastrada para a categoria "${category}".`
			);

			return EMPTY_SPECIFICATIONS;
		}

		return specifications;
	}, [category]);
};

export default useProductSpecifications;