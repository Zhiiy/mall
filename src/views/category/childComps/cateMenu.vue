<template>
  <div class="cate-menu">
    <div class="cate-menu-item" v-for="(item, index) in categories" :class="{cateActive : currentIndex === index}"
      @click="itemClick(index)">
      {{item.title}}
    </div>
  </div>
</template>

<script>
export default {
  name: 'cateMenu',
  props: {
    categories: []
  },
  data() {
    return {
      currentIndex: 0
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('menuClick',index)
    }
  }
}
</script>

<style>
.cate-menu-item {
  line-height: 50px;
  text-align: center;
  background-color: #f6f6f6;
}

.cateActive {
  border-left: 3px solid #f4748b;
  font-weight: 600;
  color: #f4748b;
  background-color: #fff;
}
</style>