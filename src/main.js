import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store/store'
import axios from './api/axios'
import VideoPlayer from 'vue-video-player'
import md5 from 'js-md5'
import qs from 'qs'


// require('./api/config')
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

//导入组件库
import ElementUI from 'element-ui'
// //导入组件相关样式
import 'element-ui/lib/theme-chalk/index.css'
// //配置Vue插件
Vue.use(ElementUI)
Vue.use(VideoPlayer)

Vue.prototype.$axios = axios
Vue.prototype.$md5 = md5
Vue.prototype.$qs = qs
Vue.config.productionTip = false


// message
import { message } from './util/resetMessage'
Vue.prototype.$message = message

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
}).$mount('#app')