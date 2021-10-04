<template>
  <div id="category">
    <nav-bar class="category-nav">
      <div slot="center">商品分类</div>
    </nav-bar>
    <scroll class="menu-content">
      <cate-menu :categories='categories' @menuClick='menuClick'></cate-menu>
    </scroll>
    <scroll class="category-content" ref="scroll" @scroll="conScroll">
      <sub-category :subcategory='subcategory'></sub-category>
      <tab-control :title="['综合','新品','销量']" @tabClick='tabClick'></tab-control>
      <goods :goods='cateGoods'></goods>
    </scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
import {
  getCategory,
  getSubcategory,
  getContentDetail
} from '@/network/category'

import NavBar from '@/components/common/navbar/NavBar'
import Scroll from '@/components/common/scroll/scroll'
import TabControl from '@/components/content/tabControl/TabControl'
import Goods from '@/components/content/goods/Goods'
import BackTop from '@/components/content/backTop/BackTop'

import cateMenu from './childComps/cateMenu'
import subCategory from './childComps/subCategory'

export default {
  name: 'category',
  components: {
    NavBar,
    Scroll,
    cateMenu,
    subCategory,
    TabControl,
    Goods,
    BackTop
  },
  data() {
    return {
      categories: [],
      maitKey: [],
      miniWallkey: [],
      subcategory: [],
      cateGoods: [],
      currentIndex: 0,
      currentType: 'pop',
      isShowBackTop: false
    }
  },
  methods: {
    menuClick(index) {
      this.currentIndex = index
      this.getSubcategory(this.currentIndex)
      this.getContentDetail(this.currentIndex, this.currentType)
    },
    tabClick(index) {
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
      this.getContentDetail(this.currentIndex, this.currentType)
      // this.$refs.tabControl1.currentIndex = index
      // this.$refs.tabControl2.currentIndex = index
    },
    conScroll(position) {
      this.isShowBackTop = -position.y > 2000
    },
    backClick() {
      this.$refs.scroll.scrollTo(0, 0, 300)
    },
    // 网络请求
    // 菜单数据
    getCategory() {
      getCategory().then((res) => {
        this.categories = res.data.category.list
        for (let i = 0; i < this.categories.length; i++) {
          this.maitKey.push(this.categories[i].maitKey)
          this.miniWallkey.push(this.categories[i].miniWallkey)
        }
        this.getSubcategory(this.currentIndex)
        this.getContentDetail(this.currentIndex, this.currentType)
      })
    },
    // 分类数据
    getSubcategory(currentIndex) {
      getSubcategory(this.maitKey[currentIndex]).then((res) => {
        this.subcategory = res.data.list
      })
    },
    // 商品数据
    getContentDetail(currentIndex, currentType) {
      getContentDetail(this.miniWallkey[currentIndex], currentType).then(
        (res) => {
          this.cateGoods = res
        }
      )
    }
  },
  created() {
    this.getCategory()
  }
}
</script>

<style>
.category-nav {
  background-color: var(--color-tint);
  color: #fff;
}

.menu-content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  width: 110px;
}

.category-content {
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 110px;
  right: 0;
}
</style>