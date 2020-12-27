/* Layout */
import mainLayout from '@/components/mainLayout'
// h5Router
export default [
   {
      path: '/h5',
      name: 'h5',
      component: mainLayout,
      redirect: '/h5/index',
      meta: {
         request: true
      },
      children: [
         {
            path: '/h5/index',
            name: 'h5_index',
            component: () => import('@/views/h5'),
            meta: {
               request: true,
               title: 'HTML5'
            }
         },
      ]
   },


]