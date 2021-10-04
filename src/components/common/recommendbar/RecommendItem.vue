<template>
  <div class="recom-item">
    <div class="recom-icon"><slot name="recom-icon"></slot></div>
    <div class="recom-text"><slot name="recom-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: 'RecommendItem'
}
</script>

<style>
.recom-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
}
.recom-item img {
  width: 100%;
  padding: 5px;
}
</style>