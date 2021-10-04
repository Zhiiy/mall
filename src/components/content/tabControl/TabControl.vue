<template>
  <div class="tab-control">
    <div v-for="(item,index) in title" 
         class="tab-control-item" 
         :class="{active: currentIndex === index}"
         @click="itemClick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabControl',
  data() {
    return {
      currentIndex: 0
    }
  },
  props: {
    title: {
      type: Array,
      default() {
        return []
      }
    }
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index
      this.$emit('tabClick', index)
    }
  }
}
</script>

<style>
.tab-control {
  display: flex;
  width: 100%;
  height: 40px;
  line-height: 40px;
  font-style: 14px;
}

.tab-control-item {
  flex: 1;
  text-align: center;
}

.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: 2px solid var(--color-tint);
  padding: 5px;
}
</style>