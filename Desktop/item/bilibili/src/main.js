import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import 'element-ui/lib/theme-chalk/index.css'
// import ElementUI from 'element-ui'

// CSS
import './assets/css/reset.css'
import './assets/css/iconfont.css'

// JS
import FastClick from 'fastclick'
FastClick.attach(document.body)

Vue.config.productionTip = false

// Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
