<template>
  <div class="detail-goods-info">
    <div class="detail-goods-desc">
      <div class="desc-line" style="float: left"><i class="desc-dot"></i></div>
      <div class="desc-text">{{goodsInfo.desc}}</div>
      <div class="desc-line" style="float: right"><i class="desc-dot" style="right: 0px"></i></div>
    </div>
    <div class="detail-goods-key" v-if="goodsInfo.detailImage"> {{goodsInfo.detailImage[0].key}} </div>
    <div class="detail-goods-img" v-if="goodsInfo.detailImage">
      <img :src="item" alt="" v-for="item in goodsInfo.detailImage[0].list" @load="imageLoad">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailGoodsInfo',
  props: {
    goodsInfo: {}
  },
  methods: {
    imageLoad() {
      this.$emit('imageLoad')
    }
  }
}
</script>

<style>
.detail-goods-desc {
  padding: 5px 3px;
  font-size: 12px;
}

.detail-goods-desc .desc-line {
  position: relative;
  width: 50px;
  height: 1px;
  background-color: #666;
}

.detail-goods-desc .desc-line .desc-dot {
  position: absolute;
  top: -3px;
  display: inline-block;
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #000;
}

.detail-goods-desc .desc-text {
  padding: 10px 0;
}

.detail-goods-key {
  padding: 5px 3px;
  font-size: 12px;
}

.detail-goods-img img {
  width: 100%;
}
</style>