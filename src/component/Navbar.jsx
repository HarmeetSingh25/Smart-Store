import React, { useContext } from 'react'
import { StoreContext } from '../context/StoreContext'

const Navbar = () => {
  const { state, dispatch } = useContext(StoreContext)

  return (
    <div className="p-4">
      <div className={`flex items-center justify-between bg-white shadow-md rounded-xl px-6 py-4 ` }>

        {/* Logo */}
        <h1 className="text-2xl font-bold text-gray-800">
          🛍 Smart Store
        </h1>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          <div className="bg-gray-100 px-4 py-2 rounded-lg font-medium">
            🛒 Cart: <span className="font-bold">{state.cart.length}</span>
          </div>

          <div className="bg-gray-100 px-4 py-2 rounded-lg font-medium">
            ❤️ Wishlist: <span className="font-bold">{state.wishlist.length}</span>
          </div>

          <button onClick={() => dispatch({ type: "TOGGLE_THEME" })}
            className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition">
            Toggle Theme
          </button>

        </div>
      </div>
    </div>
  )

}

export default Navbar