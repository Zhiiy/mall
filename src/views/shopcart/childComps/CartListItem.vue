<template>
  <div class="cart-list-item">
    <check-button class="cart-check" @click.native="checkClick" :isCheck='cartInfo.isCheck'></check-button>
    <div class="cart-img">
      <img :src="cartInfo.image" alt="">
    </div>
    <div class="cart-info">
      <div class="cart-title">{{cartInfo.title}}</div>
      <div class="cart-desc">{{cartInfo.desc}}</div>
      <div class="cart-price-info">
        <span class="cart-price">￥{{cartInfo.price}}</span>
        <span class="cart-count" style="float:right">×{{cartInfo.count}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import checkButton from '@/components/content/checkButton/checkButton'

export default {
  name: 'CartListItem',
  components: {
    checkButton
  },
  props: {
    cartInfo: {}
  },
  methods: {
    checkClick() {
      this.cartInfo.isCheck = !this.cartInfo.isCheck
    }
  }
}
</script>

<style>
.cart-list-item {
  display: flex;
  padding: 8px;
  /* font-size: 12px; */
  border-bottom: 1px solid #ccc;
}

.cart-check {
  margin: auto 0;
  margin-right: 8px;
}

.cart-img {
  width: 80px;
  height: 100px;
  border-radius: 5px;
  overflow: hidden;
}

.cart-img img {
  width: 80px;
}

.cart-info {
  flex: 1;
  position: relative;
  margin-left: 15px;
  overflow: hidden;
}

.cart-title,
.cart-desc {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.cart-title {
  margin-bottom: 10px;
  font-size: 18px;
  font-weight: 500;
  color: #000;
}

.cart-desc {
  font-size: 14px;
}

.cart-price-info {
  position: absolute;
  width: 100%;
  bottom: 0px;
}

.cart-price {
  float: left;
  font-size: 18px;
  font-weight: 600;
  color: #de8e69;
}
</style>