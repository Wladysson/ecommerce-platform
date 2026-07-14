import { Link } from "react-router-dom";

export default function RelatedProducts({ product }) {

    const products = product.related_products || [];


    if (!products.length) {
        return null;
    }


    return (
        <section className="space-y-6">

            <h2 className="text-2xl font-bold">
                Produtos relacionados
            </h2>


            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">


                {products.map((item) => (

                    <Link
                        key={item.id}
                        to={`/products/${item.id}`}
                        className="bg-white border rounded-xl overflow-hidden hover:shadow-lg transition"
                    >

                        <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-48 object-cover"
                        />


                        <div className="p-4 space-y-2">

                            <h3 className="font-semibold line-clamp-2">
                                {item.name}
                            </h3>


                            <span className="text-blue-600 font-bold">
                                R$ {Number(item.price).toFixed(2)}
                            </span>

                        </div>

                    </Link>

                ))}


            </div>


        </section>
    );
}