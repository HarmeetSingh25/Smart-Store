const StoreReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload]
      }

    case "ADD_TO_WISHLIST":
      return {
        ...state,
        wishlist: [...state.wishlist, action.payload]
      }

    case "TOGGLE_THEME":
      return {
        ...state,
        darkMode: !state.darkMode
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== action.payload)
      }

    default:
      return state
  }
}

export default StoreReducer
