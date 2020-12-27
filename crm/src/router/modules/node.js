/* Layout */
import mainLayout from '@/components/mainLayout'
// nodeRouter
export default [
   {
      path: '/node',
      name: 'node',
      component: mainLayout,
      redirect: '/node/index',
      meta: {
         request: true
      },
      children: [
         {
            path: '/node/index',
            name: 'node_index',
            component: () => import('@/views/node'),
            meta: {
               request: true,
               title: 'NodeJS'
            }
         },
      ]
   },


]