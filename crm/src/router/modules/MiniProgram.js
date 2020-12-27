/* Layout */
import mainLayout from '@/components/mainLayout'
// MiniProgramRouter
export default [
   {
      path: '/MiniProgram',
      name: 'MiniProgram',
      component: mainLayout,
      redirect: '/MiniProgram/index',
      meta: {
         request: true
      },
      children: [
         {
            path: '/MiniProgram/index',
            name: 'MiniProgram_index',
            component: () => import('@/views/MiniProgram'),
            meta: {
               request: true,
               title: 'MiniProgram'
            }
         },
      ]
   },


]