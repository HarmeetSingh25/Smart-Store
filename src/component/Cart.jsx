import React from 'react'
import { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const Cart = () => {
    let { state, dispatch } = useContext(StoreContext)
    // let {cart}=state
    // console.log(cart);

    return (
        <div className="p-6 bg-gray-100 ">
            <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-2xl p-6">

                <h2 className="text-2xl font-bold mb-6 text-gray-800">
                    🛒 Your Cart
                </h2>

                {state.cart.length === 0 ? (
                    <p className="text-gray-500 text-center">No items in cart</p>
                ) : (
                    <>
                        {state.cart.map((item) => (
                            <div
                                key={item.id}
                                className="flex justify-between items-center border-b py-4"
                            >
                                {/* Left Section */}
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-800">
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-500">₹{item.price}</p>
                                </div>

                                {/* Right Section */}
                                <div className="flex items-center gap-4">

                                    <div className="flex items-center border rounded-lg overflow-hidden">
                                        <button onClick={() => {
                                            dispatch({
                                                type: "Subtract_FROM_CART",
                                                payload: item.id
                                            })
                                        }}
                                            className="px-3 py-1 bg-gray-200 hover:bg-gray-300">
                                            -
                                        </button>

                                        <p className="px-4">{item.quantity || 1}</p>

                                        <button onClick={() => {
                                            dispatch({
                                                type: "ADD_IN_CART", payload: item.id
                                            })
                                        }}

                                            className="px-3 py-1 bg-gray-200 hover:bg-gray-300">
                                            +
                                        </button>
                                    </div>

                                    <button onClick={() => {
                                        return (dispatch({
                                            type: "REMOVE_FROM_CART", payload: item.id
                                        }))
                                    }}
                                        className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition">
                                        Remove
                                    </button>

                                </div>
                            </div>
                        ))}

                        {/* Total Section */}
                        <div className="flex justify-between items-center mt-6 pt-4 border-t">
                            <h3 className="text-lg font-semibold">Total</h3>
                            <h3 className="text-lg font-bold">
                                ₹
                                {state.cart.reduce(
                                    (acc, item) => acc + item.price * (item.quantity || 1),
                                    0
                                )}
                            </h3>
                        </div>
                    </>
                )}
            </div>
        </div>
    )

}

export default Cart