/* Layout */
import mainLayout from '@/components/mainLayout'
// corsRouter
export default [
   {
      path: '/cors',
      name: 'cors',
      component: mainLayout,
      redirect: '/cors/index',
      meta: {
         request: true
      },
      children: [
         {
            path: '/cors/index',
            name: 'cors_index',
            component: () => import('@/views/cors'),
            meta: {
               request: true,
               title: 'CORS'
            }
         },
      ]
   },
]