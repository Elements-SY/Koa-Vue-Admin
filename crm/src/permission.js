import router from './router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getCookie } from '@/utils/auth'

NProgress.configure({ showSpinner: false })

const whiteList = ['/login', '/register']

/*
 路由导航守卫，不论哪种方式都免不了校验用户登录状态，
 其次是假设没登录，哪些路由是可以进入的，哪些是不得进入。
 又或者即便登录了，哪些又是不可以进入的路由。
 不论怎么拦截，上述的条件终会跑不了。
*/

// 通过自定义路由数组遍历查找
router.beforeEach((to, from, next) => {
   NProgress.start()
   const hasCookie = getCookie()
   if (hasCookie) { // 是否存在cookie
      if (to.path === '/login') { // 存在cookie进入登录页重定向至首页
         next({ path: '/' })
         NProgress.done()
      } else {
         next()
         NProgress.done()
      }
   } else { // 如果不存在cookie允许进入登录页和注册页
      if (whiteList.indexOf(to.path) !== -1) {
         next()
      } else { // 如果在允许进入的路由数组中未找到，那么重定向到登录页
         next(`/login?redirect=${to.path}`)
         NProgress.done()
      }
   }
})

router.afterEach(() => {
   NProgress.done()
})
