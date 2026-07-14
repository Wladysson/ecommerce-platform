export default function ProductInfo({ product }) {

    return (
        <div className="space-y-4">

            <div>
                <span className="text-sm text-gray-500">
                    {product.category}
                </span>

                <h1 className="text-3xl font-bold text-gray-900">
                    {product.name}
                </h1>
            </div>


            <div className="flex items-center gap-2">

                <div className="flex text-yellow-400">
                    {"★★★★★"}
                </div>

                <span className="text-sm text-gray-500">
                    (0 avaliações)
                </span>

            </div>


            <div>

                <span className="text-3xl font-bold text-blue-600">
                    R$ {Number(product.price).toFixed(2)}
                </span>

            </div>


            <div className="flex items-center gap-2">

                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                    Em estoque
                </span>

            </div>


            <p className="text-gray-600 leading-relaxed">
                {product.description}
            </p>

        </div>
    );
}