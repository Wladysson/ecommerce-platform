export default function ProductInfo({ product }) {

    return (
        <div className="space-y-4">

            <div>
                <span className="text-sm text-gray-300">
                    {product.category}
                </span>

                <h1 className="text-3xl font-bold text-white">
                    {product.name}
                </h1>
            </div>


            <div className="flex items-center gap-2">

                <div className="flex text-yellow-400">
                    {"★★★★★"}
                </div>

                <span className="text-sm text-gray-300">
                    (0 avaliações)
                </span>

            </div>


            <div>

                <span className="text-3xl font-bold text-emerald-400">
                    R$ {Number(product.price).toFixed(2)}
                </span>

            </div>


            <div className="flex items-center gap-2">

                <span className="px-3 py-1 bg-emerald-600/20 text-emerald-400 rounded-full text-sm">
                    Em estoque
                </span>

            </div>


            <p className="text-gray-300 leading-relaxed">
                {product.description}
            </p>

        </div>
    );
}