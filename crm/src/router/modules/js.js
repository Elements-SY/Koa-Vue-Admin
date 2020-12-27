/* Layout */
import mainLayout from '@/components/mainLayout'
// jsRouter
export default [
   {
      path: '/js',
      name: 'js',
      component: mainLayout,
      redirect: '/js/index',
      meta: {
         request: true
      },
      children: [
         {
            path: '/js/index',
            name: 'js_index',
            component: () => import('@/views/js'),
            meta: {
               request: true,
               title: 'Javascript'
            }
         },
      ]
   },


]