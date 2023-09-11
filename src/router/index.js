import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    { path: '', redirect: '/page-a' },
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
    {
        // vue-router@4的变化，舍弃*通配符
        path: '/:pathMatch(.*)*',
        name: '404',
        component: () => import('@/pages/404/index.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
        return {
            el: '#app',
            top: 0,
            behavior: 'smooth',
        };
    },
})

export default router
