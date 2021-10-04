<template>
  <div class="cart-bottom-bar">
    <div class="cart-bottom-check" @click="selectAll">
      <check-button class="bottom-check" :isCheck='isSelectAll'></check-button>
      <span>全选</span>
    </div>
    <div class="cart-total-price">
      <span>合计：</span>
      <span>{{totalPrice}}</span>
    </div>
    <div class="cart-buy">结算({{selectCount}})</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import checkButton from '@/components/content/checkButton/checkButton'

export default {
  name: 'CartBottomBar',
  components: {
    checkButton
  },
  computed: {
    ...mapGetters(['cartList']),
    isSelectAll() {
      return !this.cartList.find((item) => item.isCheck == false)
    },
    selectCount() {
      return this.cartList.filter((item) => item.isCheck == true).length
    },
    totalPrice() {
      let selectCart = this.cartList.filter((item) => item.isCheck == true)
      return (
        '￥' +
        selectCart
          .reduce((pre, cur) => {
            return pre + cur.price * cur.count
          }, 0)
          .toFixed(2)
      )
    }
  },
  methods: {
    selectAll() {
      if (this.isSelectAll) {
        this.cartList.forEach((item) => (item.isCheck = false))
      } else {
        this.cartList.forEach((item) => (item.isCheck = true))
      }
    }
  }
}
</script>

<style>
.cart-bottom-bar {
  position: fixed;
  bottom: 49px;
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  background-color: #f6f6f6;
}

.cart-bottom-check {
  display: flex;
  margin-left: 8px;
}

.cart-bottom-check span {
  padding: 0 3px;
}

.bottom-check {
  margin: auto 0;
  line-height: 0px;
}

.cart-total-price {
  flex: 1;
  margin-left: 20px;
}

.cart-buy {
  float: right;
  width: 100px;
  text-align: center;
  color: #fff;
  background-color: #ff5080;
}
</style>