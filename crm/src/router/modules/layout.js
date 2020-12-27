/* Layout */
import mainLayout from '@/components/mainLayout'
// layoutRouter
export default [
   {
      path: '/layout',
      name: 'layout',
      component: mainLayout,
      redirect: '/layout/index',
      meta: {
         request: true
      },
      children: [
         {
            path: '/layout/index',
            name: 'layout_index',
            component: () => import('@/views/layout'),
            meta: {
               request: true,
               title: 'Layout'
            }
         },
      ]
   },


]