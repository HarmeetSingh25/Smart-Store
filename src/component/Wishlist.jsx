import React from 'react'
import { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const Wishlist = () => {
    const { state } = useContext(StoreContext)

    return (
        <div className="p-6">
            {state.wishlist.length === 0 ? (
                <p className="text-gray-500">No items in wishlist</p>
            ) : (
                state.wishlist.map(item => (
                    <div key={item.id} className=" flex justify-between items-center bg-white shadow p-4 mb-3 rounded-lg">
                        <div>
                            <h1 className="font-semibold">{item.name}</h1>
                            <p>₹{item.price}</p>
                        </div>
                        <div>
                            <button className="bg-red-500 text-white px-4 py-2 rounded-lg 
                     hover:bg-red-600 transition duration-200 
                     font-medium shadow-sm">
                                Remove
                            </button>
                        </div>

                    </div>
                ))
            )}
        </div>
    )
}


export default Wishlist