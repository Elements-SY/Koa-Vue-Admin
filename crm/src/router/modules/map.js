/* Layout */
import mainLayout from '@/components/mainLayout'
// mapRouter
export default [
   {
      path: '/map',
      name: 'map',
      component: mainLayout,
      redirect: '/map/index',
      meta: {
         request: true
      },
      children: [
         {
            path: '/map/index',
            name: 'map_index',
            component: () => import('@/views/map'),
            meta: {
               request: true,
               title: 'The Map'
            }
         },
         {
            path: '/map/baidu',
            name: 'baidu-maps',
            component: () => import('@/views/map/baidu'),
            meta: {
               request: true,
               title: 'Baidu Map'
            }
         },
         {
            path: '/map/gaode',
            name: 'gaode-map',
            component: () => import('@/views/map/gaode'),
            meta: {
               request: true,
               title: 'Gaode Map'
            }
         },
      ]
   },


]