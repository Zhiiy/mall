<template>
  <div id="shop-cart">
    <nav-bar class="cart-nav">
      <div slot="center">购物车({{cartLength}})</div>
    </nav-bar>
    <scroll class="cart-content" ref="scroll">
      <cart-list></cart-list>
    </scroll>
    <cart-bottom-bar></cart-bottom-bar>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import NavBar from '@/components/common/navbar/NavBar'
import Scroll from '@/components/common/scroll/scroll'

import CartList from './childComps/CartList'
import CartBottomBar from './childComps/CartBottomBar'

export default {
  name: 'shopcart',
  components: {
    NavBar,
    Scroll,
    CartList,
    CartBottomBar
  },
  activated() {
    this.$refs.scroll.refresh()
  },
  computed: {
    ...mapGetters(['cartLength'])
  }
}
</script>

<style>
.cart-nav {
  background-color: var(--color-tint);
  color: #fff;
}

.cart-content {
  position: absolute;
  top: 44px;
  bottom: 89px;
  right: 0;
  left: 0;
}
</style>