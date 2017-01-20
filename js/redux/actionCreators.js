import { SET_CART_ITEM } from './actions'

export function setCartItem (cartItem) {
  return { type: SET_CART_ITEM, cartItem }
}
