/* Layout */
import mainLayout from '@/components/mainLayout'
// downloadRouter
export default [
   {
      path: '/download',
      name: 'download',
      component: mainLayout,
      redirect: '/download',
      meta: {
         request: true
      },
      children: [
         {
            path: '/download',
            name: 'download',
            component: () => import('@/views/download'),
            meta: {
               request: true,
               title: 'Download'
            }
         },
      ]
   },


]