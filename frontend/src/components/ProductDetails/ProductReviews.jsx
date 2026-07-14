import { useState } from "react";

export default function ProductReviews({ product }) {

    const [reviews] = useState(
        product.reviews || []
    );


    return (
        <section className="bg-white rounded-xl border p-6 space-y-6">


            <div className="flex justify-between items-center">

                <h2 className="text-2xl font-bold">
                    Avaliações dos clientes
                </h2>


                <div className="text-yellow-400 text-xl">
                    ★★★★★
                </div>

            </div>



            {
                reviews.length === 0 ? (

                    <div className="text-gray-500">
                        Este produto ainda não possui avaliações.
                    </div>

                ) : (

                    <div className="space-y-5">

                        {
                            reviews.map((review) => (

                                <article
                                    key={review.id}
                                    className="border-b pb-4"
                                >

                                    <div className="flex justify-between">

                                        <strong>
                                            {review.user?.name || "Cliente"}
                                        </strong>


                                        <span className="text-yellow-400">
                                            {"★".repeat(review.rating)}
                                        </span>

                                    </div>


                                    <p className="mt-2 text-gray-600">
                                        {review.comment}
                                    </p>


                                </article>

                            ))
                        }

                    </div>

                )
            }


        </section>
    );
}