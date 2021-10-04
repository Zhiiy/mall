export default {
  addCount(state, oldProduct) {
    oldProduct.count++
  },
  addToCart(state, product) {
    product.count = 1
    product.isCheck = true
    state.cartList.push(product)
  }
}
