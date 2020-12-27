/* Layout */
import mainLayout from '@/components/mainLayout'
// ESlintRouter
export default [
   {
      path: '/ESlint',
      name: 'eslint',
      component: mainLayout,
      redirect: '/ESlint/index',
      meta: {
         request: true
      },
      children: [
         {
            path: '/ESlint/index',
            name: 'eslint_index',
            component: () => import('@/views/ESlint'),
            meta: {
               request: true,
               title: 'ESlint'
            }
         },
      ]
   },


]