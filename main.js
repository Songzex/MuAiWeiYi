import App from './App'
import store from './store'
import vuex from  "vuex"
// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import config from '@/utils/config.js';
export function createApp() {
  const app = createSSRApp(App)
  app.config.globalProperties.$imagePreUrl = config.imagePreUrl
  app.config.globalProperties.$emojiPreUrl = config.emojiPreUrl
  app.use(store)
  return {
    app
  }
}
// #endif