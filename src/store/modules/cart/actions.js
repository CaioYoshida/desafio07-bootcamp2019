export function addToCartRequest(id) {
  return {
    type: '@cart/ADD_REQUEST',
    id,
  }
}

export function addToCartSuccess(item) {
  return {
    type: '@cart/ADD_SUCCESS',
    item,
  }
}

export function removeFromCart(item) {
  return {
    type: '@cart/REMOVE',
    id: item.id,
  }
}

export function updateAmount(id, amount) {
  return {
    type: '@cart/UPDATE_AMOUNT',
    id,
    amount,
  }
}