import { createApp } from 'vue'
import './styles/global.less'
import App from './App.vue'
import router from './router'
import store from '@/store'

createApp(App)
    // 路由
    .use(router)
    // vuex
    .use(store)
    // 挂载
    .mount('#app')
