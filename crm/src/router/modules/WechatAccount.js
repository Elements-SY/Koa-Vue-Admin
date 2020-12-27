/* Layout */
import mainLayout from '@/components/mainLayout'
// WechatAccountRouter
export default [
   {
      path: '/WechatAccount',
      name: 'WechatAccount',
      component: mainLayout,
      redirect: '/WechatAccount/index',
      meta: {
         request: true
      },
      children: [
         {
            path: '/WechatAccount/index',
            name: 'WechatAccount_index',
            component: () => import('@/views/WechatAccount'),
            meta: {
               request: true,
               title: 'WechatAccount'
            }
         },
      ]
   },


]