/* Layout */
import mainLayout from '@/components/mainLayout'
// PackToolsRouter
export default [
   {
      path: '/PackTools',
      name: 'PackTools',
      component: mainLayout,
      meta: {
         request: true
      },
      children: [
         {
            path: '/',
            name: 'PackTools',
            component: () => import('@/views/PackTools'),
            meta: {
               request: true,
               title: 'PackTools'
            }
         },
      ]
   },


]