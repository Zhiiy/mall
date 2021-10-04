import Toast from "./toast.vue"

function toastRegister(Vue) {
  const toastCon = Vue.extend(Toast)
  const toast = new toastCon()
  toast.$mount(document.createElement("div"))
  document.body.appendChild(toast.$el)
  Vue.prototype.$toast = toast
}

export default toastRegister
