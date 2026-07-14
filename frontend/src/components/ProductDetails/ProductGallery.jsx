import { useState } from "react";

export default function ProductGallery({ product }) {

    const images = product.images?.length
        ? product.images
        : [product.image];


    const [selectedImage, setSelectedImage] = useState(
        images[0]
    );


    return (
        <div className="space-y-4">

            <div className="bg-white rounded-xl p-4 flex justify-center">

                <img
                    src={selectedImage}
                    alt={product.name}
                    className="w-full max-h-[500px] object-contain rounded-lg"
                />

            </div>


            <div className="flex gap-3 overflow-x-auto">

                {images.map((image, index) => (

                    <button
                        key={index}
                        onClick={() => setSelectedImage(image)}
                        className={`
                            border rounded-lg p-1
                            ${
                                selectedImage === image
                                ? "border-blue-600"
                                : "border-gray-200"
                            }
                        `}
                    >

                        <img
                            src={image}
                            alt={`${product.name}-${index}`}
                            className="w-20 h-20 object-cover rounded"
                        />

                    </button>

                ))}

            </div>

        </div>
    );
}