import React, { useContext } from 'react'
import Navbar from './component/Navbar'
import { StoreContext } from './context/StoreContext'
import Cart from './component/Cart'

const App = () => {
  const { state } = useContext(StoreContext)
  console.log(state.darkMode);
  
  return (
    <div className={ `${state.darkMode? "h-screen bg-black ":" bg-white text-black"}`} >
      <Navbar />
      <Cart/>
    </div>
  )
}

export default App