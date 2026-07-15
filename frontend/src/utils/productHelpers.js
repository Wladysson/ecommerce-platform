export const formatPrice = (price) => {
	if (!price) return "R$ 0,00";

	return Number(price).toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
	});
};

export const createEmptyProduct = () => ({
	name: "",
	description: "",
	price: "",
	category: "",

	image: "",

	brand: "",
	manufacturer: "",
	featuredBrand: false,

	specifications: {},
});

export const isFieldFilled = (value) => {
	if (typeof value === "boolean") return value;

	if (value === null || value === undefined) return false;

	if (typeof value === "string")
		return value.trim().length > 0;

	return true;
};

export const countFilledSpecifications = (specifications = {}) => {
	return Object.values(specifications).filter(isFieldFilled)
		.length;
};

export const calculateCompletion = (product) => {
	const requiredFields = [
		product.name,
		product.description,
		product.price,
		product.category,
		product.brand,
		product.image,
	];

	const filledRequired = requiredFields.filter(isFieldFilled)
		.length;

	const specifications =
		countFilledSpecifications(product.specifications);

	const total =
		requiredFields.length + specifications;

	const completed = filledRequired + specifications;

	const percentage =
		total === 0
			? 0
			: Math.round((completed / total) * 100);

	return {
		completed,
		total,
		percentage,
	};
};

export const buildProductPayload = (product) => ({
	name: product.name,
	description: product.description,
	price: Number(product.price),
	category: product.category,

	image: product.image,

	brand: product.brand,
	manufacturer: product.manufacturer,
	featuredBrand: product.featuredBrand,

	specifications: product.specifications,
});

export const resetProduct = () =>
	createEmptyProduct();

export const hasProductImage = (product) =>
	Boolean(product.image);

export const hasBasicInformation = (product) =>
	[
		product.name,
		product.description,
		product.price,
		product.category,
		product.brand,
	].every(isFieldFilled);

export const generateSlug = (name = "") =>
	name
		.toLowerCase()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/[^a-z0-9\s-]/g, "")
		.trim()
		.replace(/\s+/g, "-");