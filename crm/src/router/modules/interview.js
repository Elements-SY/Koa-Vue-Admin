/* Layout */
import mainLayout from '@/components/mainLayout'
// interviewRouter
export default [
   {
      path: '/interview',
      name: 'interview',
      component: mainLayout,
      redirect: '/interview/index',
      meta: {
         request: true
      },
      children: [
         {
            path: '/interview/index',
            name: 'interview_index',
            component: () => import('@/views/interview'),
            meta: {
               request: true,
               title: 'Interview'
            }
         },
      ]
   },


]