/* Layout */
import mainLayout from '@/components/mainLayout'
// npmRouter
export default [
   {
      path: '/npm',
      name: 'npm',
      component: mainLayout,
      redirect: '/npm/index',
      meta: {
         request: true
      },
      children: [
         {
            path: '/npm/index',
            name: 'npm_index',
            component: () => import('@/views/npm'),
            meta: {
               request: true,
               title: 'NPM'
            }
         },
      ]
   },


]