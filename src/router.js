import Vue from 'vue'
import VueRouter from 'vue-router'
import AppConfig from './components/AppConfig'
import AppValues from './components/AppValues'
Vue.use(VueRouter)
const routes = [
    {
        name: 'config',
        path: '/config',
        component: AppConfig
    },
    {
        path: '/values',
        component: AppValues
    },
    {
        path: '',
        redirect: 
        {
            name: 'config'
        }
    }
];
export const router = new VueRouter({
    routes
})