/* Layout */
import mainLayout from '@/components/mainLayout'
// WMAPRouter
export default [
   {
      path: '/WMAP',
      name: 'WMAP',
      component: mainLayout,
      redirect: '/WMAP/index',
      meta: {
         request: true
      },
      children: [
         {
            path: '/WMAP/index',
            name: 'WMAP_index',
            component: () => import('@/views/WMAP'),
            meta: {
               request: true,
               title: 'WMAP'
            }
         },
      ]
   },


]