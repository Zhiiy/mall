<template>
  <div class="base-info">
    <div class="title-info">{{goods.title}}</div>
    <div class="price-info">
      <span class="real-price">{{goods.realPrice}}</span>
      <span class="old-price">{{goods.oldPrice}}</span>
      <span class="discount" v-if="goods.discount">{{goods.discount}}</span>
    </div>
    <div class="col-info" v-if="goods.columns">
      <span>{{goods.columns[0]}}</span>
      <span>{{goods.columns[1]}}</span>
      <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="service-info" v-if="goods.services">
      <div v-for="index in goods.services.length-1" class="service-item">
        <img :src="goods.services[index-1].icon" alt="">
        <span>{{goods.services[index-1].name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailBaseInfo',
  props: {
    goods: {}
  }
}
</script>

<style>
.base-info {
  margin-top: 15px;
  padding: 0 10px;
  border-bottom: 5px solid #f2f5f8;
}

.title-info {
  font-size: 16px;
  font-weight: 500;
  color: #000;
}

.price-info {
  margin-top: 10px;
}

.price-info .real-price {
  font-size: 25px;
  font-weight: 600;
  color: var(--color-high-text);
}

.price-info .old-price {
  margin-left: 5px;
  font-size: 14px;
  color: #999;
  text-decoration: line-through;
}

.price-info .discount {
  position: relative;
  top: -10px;
  margin-left: 5px;
  padding: 2px 5px;
  font-size: 14px;
  border-radius: 8px;
  color: #fff;
  background-color: var(--color-high-text);
}

.col-info {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  border-bottom: 1px solid #f2f5f8;
  line-height: 30px;
  font-size: 16px;
  color: #999;
}

.service-info {
  display: flex;
  justify-content: space-between;
}

.service-item {
  text-align: center;
  line-height: 60px;
  font-size: 14px;
  color: #333;
}

.service-item img {
  position: relative;
  top: 3px;
  width: 22px;
  height: 22px;
  margin-right: 3px;
}
</style>