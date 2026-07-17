export default function ProductDescription({ product }) {

    return (
        <section className="bg-white rounded-xl border p-6 space-y-5">

            <h2 className="text-2xl font-bold">
                Descrição do produto
            </h2>


            <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                {product.description}
            </p>


            {product.specifications && (

                <div className="space-y-3">

                    <h3 className="text-xl font-semibold">
                        Especificações
                    </h3>


                    <ul className="list-disc list-inside text-gray-600">

                        {Object.entries(product.specifications).map(
                            ([key, value]) => (

                                <li key={key}>
                                    <strong>
                                        {key}:
                                    </strong>{" "}
                                    {value}
                                </li>

                            )
                        )}

                    </ul>

                </div>

            )}

        </section>
    );
}