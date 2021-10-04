<template>
  <div class="check-button" :class="{check : isCheck}">
    <img src="@/assets/img/cart/tick.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'checkButton',
  props: {
    isCheck: true
  }
}
</script>

<style>
.check-button {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  border: 2px solid #aaa;
}

.check {
  background-color: #ff5777;
  border-color: #ff5777;
}
</style>