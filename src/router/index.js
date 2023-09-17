import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        children: [
            { path: '/', redirect: '/page-a' },
            {
                path: '/page-a',
                name: 'page-a',
                component: () => import('@/pages/page-a/index.vue')
            },
            {
                path: '/page-b',
                name: 'page-b',
                component: () => import('@/pages/page-b/index.vue')
            },
        ]
    },
    {
        path: '/:catchAll(.*)*',
        name: '404',
        component: () => import('@/pages/404/index.vue')
    }
]

const router = createRouter({
    history: createWebHistory('vueApp/'),
    routes,
    // 控制路由切换时滚动行为的配置选项
    // scrollBehavior(to, from, savedPosition) { }
})

export default router
