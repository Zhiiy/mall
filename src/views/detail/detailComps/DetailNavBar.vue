<template>
  <nav-bar class="detail-nav">
    <div slot="left" class="left" @click="backClick">
      <img src="@/assets/img/common/back.svg" alt="">
    </div>
    <div slot="center" class="title">
      <span v-for="(item, index) in title" 
            @click="titleClick(index)"
            :class="{active: currentIndex === index}">{{item}}</span>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from '@/components/common/navbar/NavBar'

export default {
  name: 'DetailNavBar',
  components: {
    NavBar
  },
  data() {
    return {
      title: ['商品', '参数', '评论', '推荐'],
      currentIndex: 0
    }
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index
      this.$emit('titleClick', index)
    },
    backClick() {
      this.$router.back()
    }
  }
}
</script>

<style>
.detail-nav .left img {
  vertical-align: middle;
}

.detail-nav .title {
  display: flex;
  font-size: 14px;
}

.detail-nav .center span {
  flex: 1;
}

.active {
  color: var(--color-high-text);
}
</style>