import Vue from 'vue'
import BaiduMap from 'vue-baidu-map' // 百度地图
import VueAMap from 'vue-amap' // 高德地图
import Element from 'element-ui'
import xss from 'xss'  
import 'element-ui/lib/theme-chalk/index.css'
import './assets/iconfont/index.css'
import './styles/public/common.scss'
import App from './App'
import router from './router'
import Mock from './mock' // http单元测试
// Mock.init()
import store from './store'
import './permission' // 路由权限
Vue.use(Element)
Vue.use(BaiduMap, {
  ak: 'oW2UEhdth2tRbEE4FUpF9E5YVDCIPYih' // 使用申请的百度地图秘钥
})
VueAMap.initAMapApiLoader({
  key: 'db58e78f212de61b554baaacfa302501', // 使用申请的高德地图秘钥
  plugin: ['AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType'],
  uiVersion: '1.0.11' // 版本号
})

// XSS 防御
Object.defineProperty(Vue.prototype, '$xss', {
  value: xss
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
