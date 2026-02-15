import React, { useContext } from 'react'
import Navbar from './component/Navbar'
import { StoreContext } from './context/StoreContext'
import Cart from './component/Cart'
import ProductCard from './component/ProductCard'
import ProductList from './component/ProductList'
import Wishlist from './component/Wishlist'

const App = () => {
  const { state } = useContext(StoreContext)
  console.log(state.darkMode);

  return (
    <div className={`${state.darkMode ? "h-screen bg-black " : " bg-white text-black"}`} >
      <Navbar />
      <ProductList />
      {/* <ProductCard/> */}
      <Cart />
      <Wishlist />
    </div>
  )
}

export default App