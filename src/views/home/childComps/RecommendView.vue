<template>
  <recommend-bar>
    <recommend-item v-for="item in recommends">
      <a :href="item.link" slot="recom-icon"><img :src="item.image" alt=""></a>
      <div slot="recom-text">{{item.title}}</div>
    </recommend-item>
  </recommend-bar>
</template>

<script>
import RecommendBar from '@/components/common/recommendbar/RecommendBar'
import RecommendItem from '@/components/common/recommendbar/RecommendItem'

export default {
  name: 'RecommendView',
  props: {
    recommends: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    RecommendBar,
    RecommendItem
  }
}
</script>

<style>

</style>