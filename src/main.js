import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import locale from 'element-plus/lib/locale/lang/zh-cn'
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router'
import store from './store'

if(process.env.NODE_ENV !== 'production'){
    require('@/mock')
}

const app = createApp(App)
app.use(ElementPlus, { locale })
app.use(router)
app.use(store)
app.mount('#app')

