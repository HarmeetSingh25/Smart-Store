import React, { createContext, useReducer } from "react"
import StoreReducer from "./StoreReducer"

export const StoreContext = createContext()

const initialState = {
  cart: [],
  wishlist: [],
  darkMode: false
}

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(StoreReducer, initialState)
  // const dd = useReducer(StoreReducer, initialState)
  // console.log(dd);


  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}
