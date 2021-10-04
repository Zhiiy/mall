<template>
  <div class="detail-param-info">
    <table class="size-info" v-if="paramInfo.size">
      <tr v-for="item in paramInfo.size[0]">
        <th> {{item[0]}} </th>
        <td v-for="td in item.length - 1"> {{item[td]}} </td>
      </tr>
    </table>
    <table class="params-info">
      <tr v-for="item in paramInfo.info">
        <th> {{item.key}} </th>
        <td> {{item.value}} </td>
      </tr>
    </table>
    <div class="img-info" v-if="isShowImage">
      <img :src="paramInfo.images" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailParamInfo',
  props: {
    paramInfo: {}
  },
  computed: {
    isShowImage() {
      this.paramInfo.images !== ''
    }
  }
}
</script>

<style>
.detail-param-info {
  font-size: 12px;
  padding: 8px 5px;
  border-bottom: 5px solid #f2f5f8;
}

.size-info,
.params-info {
  width: 220px;
  margin: 0 auto;
  margin-bottom: 10px;
  border-bottom: 1px solid #999;
}

.size-info tr,
.params-info tr {
  border-bottom: 1px solid #999;
}

.size-info th {
  padding-right: 15px;
  text-align: left;
  white-space: nowrap;
}

.size-info td {
  padding: 8px;
}

.params-info th {
  padding: 8px 50px 8px 0;
  text-align: left;
  white-space: nowrap;
}

.params-info td {
  color: var(--color-high-text);
}

.img-info img {
  width: 100%;
}
</style>