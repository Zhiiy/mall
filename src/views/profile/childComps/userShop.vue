<template>
  <div class="user-shop">
    <div class="user-shop-cart" @click="shopClick">
      <div><img src="@/assets/img/profile/cart.svg" alt=""></div>
      <span>我的购物车</span>
    </div>
    <div class="user-download">
      <div><img src="@/assets/img/profile/shopping.svg" alt=""></div>
      <span style="border-bottom: 0px">下载APP</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userShop',
  methods: {
    shopClick() {
      this.$router.replace('/shopcart')
    }
  }
}
</script>

<style>
.user-shop {
  padding: 8px;
}

.user-shop span {
    flex:1;
    border-bottom: 1px solid #e7e7e7;
}

.user-shop-cart,
.user-download {
  display: flex;
  line-height: 45px;
}

.user-shop div img {
  width: 20px;
  margin-right: 10px;
  vertical-align: middle;
}
</style>