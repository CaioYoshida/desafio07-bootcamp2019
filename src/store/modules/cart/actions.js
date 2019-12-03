export function addToCart(item) {
  return {
    type: '@cart/ADD',
    item,
  }
}

export function removeFromCart(item) {
  return {
    type: '@cart/REMOVE',
    id: item.id,
  }
}