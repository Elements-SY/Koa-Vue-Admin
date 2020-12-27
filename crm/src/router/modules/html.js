/* Layout */
import mainLayout from '@/components/mainLayout'
// htmlRouter
export default [
   {
      path: '/html',
      name: 'html',
      component: mainLayout,
      redirect: '/html/index',
      meta: {
         request: true
      },
      children: [
         {
            path: '/html/index',
            name: 'html_index',
            component: () => import('@/views/html'),
            meta: {
               request: true,
               title: 'Html'
            }
         },
      ]
   },
]
