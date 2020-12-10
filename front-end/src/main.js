import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'

Vue.config.productionTip = false

let data = {
  recipes: mock,
  nextId: 11
}

new Vue({
  data,
  router,
  render: h => h(App)
}).$mount('#app')
