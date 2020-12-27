/* Layout */
import mainLayout from '@/components/mainLayout'
// TypeScriptRouter
export default [
   {
      path: '/TypeScript',
      name: 'TypeScript',
      component: mainLayout,
      redirect: '/TypeScript/index',
      meta: {
         request: true
      },
      children: [
         {
            path: '/TypeScript/index',
            name: 'TypeScript_index',
            component: () => import('@/views/TypeScript'),
            meta: {
               request: true,
               title: 'TypeScript'
            }
         },
      ]
   },


]