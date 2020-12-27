
/* Layout */
import mainLayout from '@/components/mainLayout'

// publicRouter
export default [
    { path: '*', redirect: '/404', hidden: true },
    {
        path: '/login',
        name: 'login',
        component: () => import('@/views/login'),
        meta: {
            request: false,
            title: '登录'
        }
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('@/views/register'),
        meta: {
            title: '用户注册',
            request: false,
        }
    },
    {
        path: '/404',
        component: () => import('@/components/error-pages/404'),
        hidden: true
    },
    {
        path: '/401',
        component: () => import('@/components/error-pages/401'),
        hidden: true
    },
    {
        path: '/',
        name: 'index',
        component: mainLayout,
        redirect: '/home',
        meta: {
            request: true
        },
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('@/views/home'),
                meta: {
                    request: true,
                    title: '首页'
                }
            }]
    },


]