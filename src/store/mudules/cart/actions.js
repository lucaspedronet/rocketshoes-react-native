export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    product
  }
}

export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id
  }
}

export function removeToCartRequest(id) {
  return {
    type: '@cart/REMOVE_RESQUEST',
    id
  }
}

export function removeToCartSuccess(id) {
  return {
    type: '@cart/REMOVE_SUCCESS',
    id
  }
}

export function updateAmountResquest(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_RESQUEST',
    id,
    amount
  }
}

export function updateAmountSuccess(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT_SUCCESS',
    id,
    amount
  }
}
