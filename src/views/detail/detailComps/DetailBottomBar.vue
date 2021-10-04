<template>
  <div class="bottom-bar">
    <div class="bottom-l">
      <div class="service">
        <span class="icon"></span>
        <span style="color: #ff5881">客服</span>
      </div>
      <div class="shop">
        <span class="icon"></span>
        <span>店铺</span>
      </div>
      <div class="collect">
        <span class="icon"></span>
        <span>收藏</span>
      </div>
    </div>
    <div class="bottom-r">
      <div class="shop-cart" @click="addToCart">加入购物车</div>
      <div class="buy">立即购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBottomBar',
  methods: {
      addToCart() {
          this.$emit('addToCart')
      }
  }
}
</script>

<style>
.bottom-bar {
  display: flex;
  justify-content: space-evenly;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 49px;
  text-align: center;
  z-index: 1;
  background-color: #fff;
}
.bottom-l,
.bottom-r {
  display: flex;
  flex: 1;
}

.bottom-l div {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.bottom-l span {
  flex: 1;
  font-size: 14px;
}

.bottom-l .icon {
  display: block;
  width: 22px;
  height: 22px;
  margin: 3px auto 0;
  background: url('~@/assets/img/detail/detail_bottom.png') 0 0/100%;
}

.bottom-l .service .icon {
  background-position: 0 -53px;
}

.bottom-l .shop .icon {
  background-position: 0 -98px;
}

.bottom-r {
  display: flex;
  line-height: 49px;
  text-align: center;
  font-size: 14px;
}

.bottom-r div {
  flex: 1;
}

.bottom-r .shop-cart {
  color: #ff5881;
  background-color: #ffecef;
}

.bottom-r .buy {
  color: #fff;
  background-color: #ff5080;
}
</style>