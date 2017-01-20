import { SET_CART_ITEM } from './actions'

const DEFAULT_STATE = {
  cartItem: ''
}

const setCartItem = (state, action) => {
  const newState = {}
  Object.assign(newState, state, {cartItem: action.cartItem})
  return newState
}

const rootReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case SET_CART_ITEM:
      return setCartItem(state, action)
    default:
      return state
  }
}

export default rootReducer
