/* Layout */
import mainLayout from '@/components/mainLayout'
// ExcelRouter
export default [
   {
      path: '/Excel',
      name: 'Excel',
      component: mainLayout,
      redirect: '/Excel/index',
      meta: {
         request: true
      },
      children: [
         {
            path: '/Excel/index',
            name: 'Excel',
            component: () => import('@/views/Excel'),
            meta: {
               request: true,
               title: 'Excel'
            }
         },
         {
            path: '/Excel/export',
            name: 'export',
            component: () => import('@/views/Excel/export'),
            meta: {
               request: true,
               title: 'Export'
            }
         },
         {
            path: '/Excel/import',
            name: 'import',
            component: () => import('@/views/Excel/import'),
            meta: {
               request: true,
               title: 'Import'
            }
         },
      ]
   },


]