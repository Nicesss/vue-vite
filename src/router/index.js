import { createRouter, createWebHashHistory } from 'vue-router'
import App from '@/App.vue'

const routes = [
    {
        path: '',
        component: App,
        children: [
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
                // 官方文档：https://next.router.vuejs.org/zh/guide/migration/index.html#%E5%88%A0%E9%99%A4%E4%BA%86-%EF%BC%88%E6%98%9F%E6%A0%87%E6%88%96%E9%80%9A%E9%85%8D%E7%AC%A6%EF%BC%89%E8%B7%AF%E7%94%B1
                path: '/:pathMatch(.*)*',
                name: '404',
                component: () => import('@/pages/404/index.vue')
            }
        ]
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
