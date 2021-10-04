<template>
  <div id="recom-bar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'RecommendBar'
}
</script>

<style>
#recom-bar {
    display: flex;
    width: 100%;
    padding-bottom: 25px;
    border-bottom: 15px solid #eee;
}
</style>