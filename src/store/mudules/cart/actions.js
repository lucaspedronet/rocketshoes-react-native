export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product
  }
}

export function addToCartRequest(product) {
  return {
    type: '@cart/ADD_REQUEST',
    product
  }
}

export function removeToCart(id) {
  return {
    type: '@cart/REMOVE',
    id
  }
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount
  }
}
