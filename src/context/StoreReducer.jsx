const StoreReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":

      const existingItem = state.cart.find(
        item => item.id === action.payload.id
      )

      if (existingItem) {
        return state   // do nothing
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, quantity: 1 }]
      }


    case "ADD_TO_WISHLIST":

      const existingItemWISHLIST = state.wishlist.find(
        item => item.id === action.payload.id
      )

      if (existingItemWISHLIST) {
        return state
      }

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
    case "ADD_IN_CART":
      return {
        ...state,
        cart: state.cart.map(item =>
          item.id === action.payload
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        )
      }
    case "Subtract_FROM_CART":
      return {
        ...state,
        cart: state.cart
          .map(item =>
            item.id === action.payload
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter(item => item.quantity > 0)
      }




    default:
      return state
  }
}

export default StoreReducer
