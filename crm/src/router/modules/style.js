/* Layout */
import mainLayout from '@/components/mainLayout'
// cssRouter
export default [
   {
      path: '/style',
      name: 'style',
      component: mainLayout,
      redirect: '/style/css',
      meta: {
         request: true,
         title: 'Style'
      },
      children: [
         {
            path: '/style/css',
            name: 'CSS',
            component: () => import('@/views/style'),
            meta: {
               request: true,
               title: 'CSS'
            }
         },
         {
            path: '/style/less',
            name: 'less',
            component: () => import('@/views/style/less'),
            meta: {
               request: true,
               title: 'Less'
            }
         },
         {
            path: '/style/sass',
            name: 'sass',
            component: () => import('@/views/style/sass'),
            meta: {
               request: true,
               title: 'Sass'
            }
         },
         {
            path: '/style/css/animation',
            name: 'animation',
            component: () => import('@/views/style/css/animation'),
            meta: {
               request: true,
               title: 'animation'
            }
         },
         {
            path: '/style/css/scrollbar',
            name: 'scrollbar',
            component: () => import('@/views/style/css/scrollbar'),
            meta: {
               request: true,
               title: 'scrollbar'
            }
         },
      ]
   },


]