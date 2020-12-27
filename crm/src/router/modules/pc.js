/* Layout */
import mainLayout from '@/components/mainLayout'
// pcRouter
export default [
   {
      path: '/pc',
      name: 'pc',
      component: mainLayout,
      redirect: '/pc/index',
      meta: {
         request: true
      },
      children: [
         {
            path: '/pc/index',
            name: 'pc_index',
            component: () => import('@/views/pc'),
            meta: {
               request: true,
               title: 'PC'
            }
         },
      ]
   },


]