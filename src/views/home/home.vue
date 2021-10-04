<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control :title="['流行','新款','精选']" 
                 @tabClick="TabClick" 
                 ref="tabControl1"
                 class="tab-control"
                 v-show="isShowTabCon"></tab-control>
    <scroll class="content" 
            @pullingUp='LoadMore' 
            @scroll="conScroll" 
            ref="scroll" 
            :pullUpLoad='true'>
      <home-swiper :banners='banners' @imageLoad='swiperLoad'></home-swiper>
      <recommend-view :recommends='recommends'></recommend-view>
      <feature-view></feature-view>
      <tab-control :title="['流行','新款','精选']" 
                   @tabClick="TabClick" 
                   ref="tabControl2"></tab-control>
      <goods :goods='showGoods'></goods>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import { getHomeMultidata, getHomeGoods } from '@/network/home'

import Scroll from '@/components/common/scroll/scroll'
import NavBar from '@/components/common/navbar/NavBar'
import TabControl from '@/components/content/tabControl/TabControl'
import Goods from '@/components/content/goods/Goods'
import BackTop from '@/components/content/backTop/BackTop'

import HomeSwiper from './childComps/HomeSwiper'
import RecommendView from './childComps/RecommendView'
import FeatureView from './childComps/FeatureView'

export default {
  name: 'home',
  components: {
    NavBar,
    HomeSwiper,
    RecommendView,
    FeatureView,
    TabControl,
    Goods,
    Scroll,
    BackTop
  },
  data() {
    return {
      banners: [],
      recommends: [],
      goods: {
        pop: { page: 1, list: [] },
        new: { page: 1, list: [] },
        sell: { page: 1, list: [] }
      },
      currentType: 'pop',
      isShowBackTop: false,
      isShowTabCon: false,
      tabOffsetTop: 0
    }
  },
  methods: {
    // 事件监听
    TabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop'
          break
        case 1:
          this.currentType = 'new'
          break
        case 2:
          this.currentType = 'sell'
          break
      }
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    LoadMore() {
      this.getHomeGoods(this.currentType)
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    },
    conScroll(position) {
      this.isShowBackTop = -position.y > 2000
      this.isShowTabCon = -position.y > this.tabOffsetTop
    },
    swiperLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop
      // console.log(this.tabOffsetTop)
    },
    // 网络请求
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.banner.list
        this.recommends = res.data.recommend.list
      })
    },
    getHomeGoods(type) {
      let page = this.goods[type].page
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list)
        this.goods[type].page += 1
      })
    }
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list
    }
  },
  created() {
    // 请求数据
    this.getHomeMultidata(),
      this.getHomeGoods('pop'),
      this.getHomeGoods('new'),
      this.getHomeGoods('sell')
  }
}
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}

.content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
}

.tab-control {
  position: relative;
  z-index: 10;
  background-color: #fff;
}
</style>