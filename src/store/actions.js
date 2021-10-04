export default {
  addCart(context, product) {
    return new Promise((resolve, reject) => {
      let oldProduct = context.state.cartList.find(
        (item) => item.iid === product.iid
      )
      if (oldProduct) {
        context.commit("addCount", oldProduct)
        resolve("商品+1")
      } else {
        context.commit("addToCart", product)
        resolve("商品已添加")
      }
    })
  }
}
