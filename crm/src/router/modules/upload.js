/* Layout */
import mainLayout from '@/components/mainLayout'
// uploadRouter
export default [
   {
      path: '/upload',
      name: 'upload',
      component: mainLayout,
      redirect: '/upload',
      meta: {
         request: true
      },
      children: [
         {
            path: '/upload',
            name: 'upload',
            component: () => import('@/views/upload'),
            meta: {
               request: true,
               title: 'Upload'
            }
         },
      ]
   },


]