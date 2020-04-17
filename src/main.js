import Vue from 'vue'
import App from './App.vue'

import router from './router'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // elementUI的样式文件需要单独引入
Vue.use(ElementUI)

import './assets/reset.css' // 重置项目样式
import './router/permission'
import store from './store/index.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
