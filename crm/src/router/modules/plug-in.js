/* Layout */
import mainLayout from '@/components/mainLayout'
// plug-inRouter
export default [
   {
      path: '/plug-in',
      name: 'plug-in',
      component: mainLayout,
      redirect: '/plug-in/index',
      meta: {
         request: true
      },
      children: [
         {
            path: '/plug-in/index',
            name: 'plug-in_index',
            component: () => import('@/views/plug-in'),
            meta: {
               request: true,
               title: 'Plug-in'
            }
         },
      ]
   },


]