/* Layout */
import mainLayout from '@/components/mainLayout'
// chartRouter
export default [
   {
      path: '/chart',
      name: 'chart',
      component: mainLayout,
      redirect: '/chart/index',
      meta: {
         request: true
      },
      children: [
         {
            path: '/chart/index',
            name: 'chart_index',
            component: () => import('@/views/chart'),
            meta: {
               request: true,
               title: 'Chart'
            }
         },
         {
            path: '/chart/echarts',
            name: 'echarts',
            component: () => import('@/views/chart/echarts'),
            meta: {
               request: true,
               title: 'Echarts'
            }
         },
      ]
   },


]