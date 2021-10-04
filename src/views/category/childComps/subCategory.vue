<template>
  <div class="sub-category">
    <div class="sub-item" v-for="item in subcategory">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div class="sub-item-title"> {{item.title}} </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'subCategory',
  props: {
    subcategory: []
  }
}
</script>

<style>
.sub-category {
    display: flex;
    width: 60%;
    flex-wrap: wrap;
    text-align: center;
    font-size: 14px;
}

.sub-item {
    width: 50%;
    padding: 10px;
}

.sub-item img {
    width: 100%;
    margin-bottom: 5px;
}
</style>