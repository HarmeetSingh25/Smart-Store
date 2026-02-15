import React, { useContext } from "react"
import { StoreContext } from "../context/StoreContext"

const ProductCard = ({ product }) => {
    console.log(product);

    const { dispatch } = useContext(StoreContext)

    return (
        <div className="bg-white shadow-lg rounded-xl p-4">

            <h3 className="text-lg font-bold">{product.name}</h3>
            <p className="text-gray-600 mb-4">₹{product.price}</p>

            <div className="flex gap-3">
                <button
                    onClick={() =>
                        dispatch({
                            type: "ADD_TO_CART",
                            payload: product
                        })
                    }
                    className="bg-black text-white px-3 py-2 rounded-lg"
                >
                    Add to Cart
                </button>

                <button
                    onClick={() =>
                        dispatch({
                            type: "ADD_TO_WISHLIST",
                            payload: product
                        })
                    }
                    className="bg-pink-500 text-white px-3 py-2 rounded-lg"
                >
                    ❤️
                </button>
            </div>

        </div>
    )
}

export default ProductCard
