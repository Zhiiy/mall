<template>
  <div id="toast" v-show="isShow">
    <div> {{message}} </div>
  </div>
</template>

<script>
export default {
  name: 'toast',
  data() {
    return {
      isShow: false,
      message: ''
    }
  },
  methods: {
    show(message) {
      this.message = message
      this.isShow = true
      setTimeout(() => {
        this.isShow = false
        this.message = ''
      }, 2000)
    }
  }
}
</script>

<style>
#toast {
  position: fixed;
  top: 50%;
  left: 50%;
  padding: 5px 15px;
  transform: translate(-50%, -50%);
  font-size: 20px;
  color: #fff;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99;
}
</style>