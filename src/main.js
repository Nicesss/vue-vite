import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import './styles/global.less'
import App from './App.vue'
import router from './router'
import store from '@/store'

createApp(App)
    // 路由
    .use(router)
    .use(ElementPlus)
    // vuex
    .use(store)
    // 挂载
    .mount('#app')
