/* Layout */
import mainLayout from '@/components/mainLayout'
// FrameWorkRouter
export default [
   {
      path: '/FrameWork',
      name: 'FrameWork',
      component: mainLayout,
      redirect: '/FrameWork/vue',
      meta: {
         request: true,
         title: 'FrameWork'
      },
      children: [
         {
            path: '/FrameWork/vue',
            name: 'Vue',
            component: () => import('@/views/FrameWork'),
            meta: {
               request: true,
               title: 'Vue'
            }, 
         },
         {
            path: '/FrameWork/vue-cli',
            name: 'vue-cli',
            component: () => import('@/views/FrameWork/vue-cli'),
            meta: {
               request: true,
               title: 'Vue-Cli'
            }, 
         },
         {
            path: '/FrameWork/vue3',
            name: 'vue3',
            component: () => import('@/views/FrameWork/vue3'),
            meta: {
               request: true,
               keepAlive: "true", // 缓存该组件
               title: 'Vue3'
            }, 
         },
         {
            path: '/FrameWork/vue/axios',
            name: 'axios',
            component: () => import('@/views/FrameWork/vue/axios'),
            meta: {
               request: true,
               title: 'axios'
            }
         },
         {
            path: '/FrameWork/vue/directive',
            name: 'directive',
            component: () => import('@/views/FrameWork/vue/directive'),
            meta: {
               request: true,
               title: 'directive'
            }
         },
         {
            path: '/FrameWork/vue/extend',
            name: 'extend',
            component: () => import('@/views/FrameWork/vue/extend'),
            meta: {
               request: true,
               title: 'extend'
            }
         },
         {
            path: '/FrameWork/vue/filters',
            name: 'filters',
            component: () => import('@/views/FrameWork/vue/filters'),
            meta: {
               request: true,
               title: 'filters'
            }
         },
         {
            path: '/FrameWork/vue/jsx',
            name: 'jsx',
            component: () => import('@/views/FrameWork/vue/jsx'),
            meta: {
               request: true,
               title: 'jsx'
            }
         },
         {
            path: '/FrameWork/vue/keep-alive',
            name: 'keep-alive',
            component: () => import('@/views/FrameWork/vue/keep-alive'),
            meta: {
               request: true,
               title: 'keep-alive'
            }
         },
         {
            path: '/FrameWork/vue/lifecycle',
            name: 'lifecycle',
            component: () => import('@/views/FrameWork/vue/lifecycle'),
            meta: {
               request: true,
               title: 'lifecycle'
            }
         },
         {
            path: '/FrameWork/vue/mixin',
            name: 'mixin',
            component: () => import('@/views/FrameWork/vue/mixin'),
            meta: {
               request: true,
               title: 'mixin'
            }
         },
         {
            path: '/FrameWork/vue/router',
            name: 'router',
            component: () => import('@/views/FrameWork/vue/router'),
            meta: {
               request: true,
               title: 'router'
            }
         },
         {
            path: '/FrameWork/vue/router-view',
            name: 'router-view',
            component: () => import('@/views/FrameWork/vue/router-view'),
            meta: {
               request: true,
               title: 'router-view'
            }
         },
         {
            path: '/FrameWork/vue/solt',
            name: 'solt',
            component: () => import('@/views/FrameWork/vue/solt'),
            meta: {
               request: true,
               title: 'solt'
            }
         },
         {
            path: '/FrameWork/vue/vuex',
            name: 'vuex',
            component: () => import('@/views/FrameWork/vue/vuex'),
            meta: {
               request: true,
               title: 'vuex'
            }
         },
         {
            path: '/FrameWork/vue/scoped',
            name: 'scoped',
            component: () => import('@/views/FrameWork/vue/scoped'),
            meta: {
               request: true,
               title: 'Scoped CSS'
            }
         },
      ]
   },


]