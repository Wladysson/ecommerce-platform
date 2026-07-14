import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import ProductGallery from "../components/ProductDetails/ProductGallery";
import ProductInfo from "../components/ProductDetails/ProductInfo";
import PaymentOptions from "../components/ProductDetails/PaymentOptions";
import ProductDescription from "../components/ProductDetails/ProductDescription";
import ProductReviews from "../components/ProductDetails/ProductReviews";
import RelatedProducts from "../components/ProductDetails/RelatedProducts";
import AddToCartButton from "../components/ProductDetails/AddToCartButton";

const API_URL = import.meta.env.VITE_API_URL;

export default function ProductDetails() {
    const { id } = useParams();

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadProduct() {
            try {
                setLoading(true);

                const response = await fetch(
                    `${API_URL}/api/products/${id}`
                );

                if (!response.ok) {
                    throw new Error("Produto não encontrado");
                }

                const data = await response.json();

                setProduct(data.product);

            } catch (error) {
                setError(error.message);

            } finally {
                setLoading(false);
            }
        }

        loadProduct();

    }, [id]);


    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                Carregando produto...
            </div>
        );
    }


    if (error || !product) {
        return (
            <div className="flex justify-center items-center h-screen">
                Produto não encontrado
            </div>
        );
    }


    return (
        <main className="container mx-auto px-4 py-8">

            <section className="grid grid-cols-1 lg:grid-cols-2 gap-10">

                <ProductGallery product={product} />

                <div className="space-y-6">

                    <ProductInfo product={product} />

                    <PaymentOptions product={product} />

                    <AddToCartButton product={product} />

                </div>

            </section>


            <section className="mt-12 space-y-10">

                <ProductDescription product={product} />

                <ProductReviews product={product} />

                <RelatedProducts product={product} />

            </section>

        </main>
    );
}