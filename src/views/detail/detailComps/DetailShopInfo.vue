<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="">
      <span>{{shop.name}}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-l">
        <div class="shop-sell">
          <span> {{shop.sells | sellCount}} </span>
          <span>总销量</span>
        </div>
        <div class="shop-count">
          <span> {{shop.goodsCount}} </span>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="shop-middle-r">
        <table>
          <tr class="shop-score" v-for="item in shop.score">
            <td>{{item.name}}</td>
            <td class="score" :class="{'better-score' : item.isBetter}">{{item.score}}</td>
            <td class="level" :class="{'better-level' : item.isBetter}"><span>{{item.isBetter ? '低' : '高'}}</span></td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <span>进店逛逛</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailShopInfo',
  props: {
    shop: {}
  },
  filters: {
    sellCount(value) {
      if (value < 10000) {
        return value
      } else {
        return (value / 10000).toFixed(1)
      }
    }
  },
  computed: {}
}
</script>

<style>
.shop-info {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
}

.shop-top {
  display: flex;
  align-items: center;
  line-height: 50px;
}

.shop-top img {
  width: 50px;
  height: 50px;
  margin-right: 20px;
  border-radius: 50%;
  vertical-align: middle;
}

.shop-middle {
  display: flex;
  margin-top: 20px;
}

.shop-middle-l,
.shop-middle-r {
  flex: 1;
}

.shop-middle-l {
  display: flex;
  justify-content: space-evenly;
  margin: 10px 0;
  border-right: 1px solid #c2c2c2;
}

.shop-middle-l div {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.shop-middle-l div span {
  flex: 1;
  font-size: 18px;
}

.shop-middle-r table {
  margin-left: 30px;
}

.shop-score td {
  padding: 3px 10px 3px 0;
  font-size: 16px;
}

.shop-score .score {
  color: #5ea732;
}

.shop-score .better-score {
  color: #f13e3a;
}

.shop-score .level span {
  background-color: #5ea732;
  color: #fff;
}

.shop-score .better-level span {
  background-color: #f13e3a;
}

.shop-bottom {
  margin-top: 12px;
  text-align: center;
}

.shop-bottom span {
  display: inline-block;
  width: 150px;
  line-height: 30px;
  border-radius: 10px;
  font-size: 16px;
  background-color: #f2f5f8;
}
</style>