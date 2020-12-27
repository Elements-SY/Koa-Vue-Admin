/* Layout */
import mainLayout from '@/components/mainLayout'
// babelRouter
export default [
   {
      path: '/babel',
      name: 'babel',
      component: mainLayout,
      redirect: '/babel/index',
      meta: {
         request: true
      },
      children: [
         {
            path: '/babel/index',
            name: 'babel_index',
            component: () => import('@/views/babel'),
            meta: {
               request: true,
               title: 'Babel'
            }
         },
      ]
   },


]