<template>
  <div id="detail">
    <detail-nav-bar @titleClick='titleClick' ref="datailNav"></detail-nav-bar>
    <scroll class="content" 
            ref="scroll" 
            @scroll="conScroll">
      <detail-swiper :topImages='topImages'></detail-swiper>
      <detail-base-info :goods='goods'></detail-base-info>
      <detail-shop-info :shop='shop'></detail-shop-info>
      <detail-goods-info :goodsInfo='goodsInfo' @imageLoad='goodsLoad'></detail-goods-info>
      <detail-param-info :paramInfo='paramInfo' ref="params"></detail-param-info>
      <detail-comment-info :commentInfo='commentInfo' ref="comment"></detail-comment-info>
      <goods :goods='recommend' ref="recommend"></goods>
    </scroll>
    <detail-bottom-bar @addToCart='addToCart'></detail-bottom-bar>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import {
  getDetail,
  getRecommend,
  getGoods,
  Shop,
  GoodsParam
} from '@/network/detail'

import { debounce } from '@/common/utils'

import DetailNavBar from './detailComps/DetailNavBar'
import DetailSwiper from './detailComps/DetailSwiper'
import DetailBaseInfo from './detailComps/DetailBaseInfo'
import DetailShopInfo from './detailComps/DetailShopInfo'
import DetailGoodsInfo from './detailComps/DetailGoodsInfo'
import DetailParamInfo from './detailComps/DetailParamInfo'
import DetailCommentInfo from './detailComps/DetailCommentInfo'
import DetailBottomBar from './detailComps/DetailBottomBar'

import Scroll from '@/components/common/scroll/scroll'
import BackTop from '@/components/content/backTop/BackTop'
import Goods from '@/components/content/goods/Goods'

export default {
  name: 'detail',
  components: {
    DetailNavBar,
    Scroll,
    BackTop,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    Goods,
    DetailBottomBar
  },
  data() {
    return {
      iid: null,
      topImages: [],
      recommend: [],
      themeTopY: [],
      goods: {},
      shop: {},
      goodsInfo: {},
      paramInfo: {},
      commentInfo: {},
      isShowBackTop: false,
      getThemeTopY: null,
      currentIndex: 0
    }
  },
  methods: {
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    },
    conScroll(position) {
      this.isShowBackTop = -position.y > 2000
      for (let i = 0; i < this.themeTopY.length - 1; i++) {
        if (this.currentIndex !== i && this.themeTopY[i] <= -position.y && -position.y < this.themeTopY[i + 1]) {
          this.currentIndex = i
          this.$refs.datailNav.currentIndex = this.currentIndex
        }
      }
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.themeTopY[index], 300)
    },
    goodsLoad() {
      this.getThemeTopY()
    },
    addToCart() {
      // 获取购物车商品信息
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.realPrice
      product.iid = this.iid
      // 加入购物车
      this.$store.dispatch('addCart', product).then(res => this.$toast.show(res))
    }
  },
  created() {
    this.iid = this.$route.params.iid
    // 推荐数据
    getRecommend().then((res) => {
      this.recommend = res.data.list
    })
    // 请求数据
    getDetail(this.iid).then((res) => {
      const data = res.result
      // console.log(data)
      // 轮播图数据
      this.topImages = data.itemInfo.topImages
      // 商品信息
      this.goods = new getGoods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      )
      // 店铺信息
      this.shop = new Shop(data.shopInfo)
      // 商品详细数据
      this.goodsInfo = data.detailInfo
      // 商品参数数据
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      )
      // 评论数据
      data.rate.cRate != 0
        ? (this.commentInfo = data.rate.list[0])
        : this.commentInfo
    })
    // 防抖
    this.getThemeTopY = debounce(() => {
      this.themeTopY = []
      this.themeTopY.push(0)
      this.themeTopY.push(this.$refs.params.$el.offsetTop)
      this.themeTopY.push(this.$refs.comment.$el.offsetTop)
      this.themeTopY.push(this.$refs.recommend.$el.offsetTop)
      this.themeTopY.push(Number.MAX_VALUE)
      // console.log(this.themeTopY)
    }, 300)
  }
}
</script>

<style>
.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
}
</style>