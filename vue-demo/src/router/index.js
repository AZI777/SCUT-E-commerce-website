import {createRouter, createWebHistory} from 'vue-router';
// 导入刚才编写的组件
import AppIndex from '@/components/home/AppIndex.vue';
import Login from '@/components/Login.vue';
import Home from "@/components/Home.vue";
import BackendIndex from "@/components/market/BackendIndex.vue";
import FrontendIndex from "@/components/market/FrontendIndex.vue";
import CartIndex from "@/components/market/CartIndex.vue";

const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home,
        redirect: '/backend',
        children: [
            {
                path: '/index',
                name: 'AppIndex',
                component: AppIndex,
                redirect:'/login',
                meta: {
                    requireAuth: true
                }
            },
            {
                path: '/backend',
                name: 'Backend',
                component:BackendIndex,
                meta: {
                    requireAuth: true
                }
            },
            {
                path:'/frontend',
                name:'Frontend',
                component: FrontendIndex,
                meta:{
                    requireAuth: true
                }
            },
            {
                path:'/cart',
                name:'Cart',
                component: CartIndex,
                meta:{
                    requireAuth: true
                }
            }

        ]
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/',
        name: 'root',
        redirect: '/index',
        // component: Login,
    }
];

const router = createRouter({
    history: createWebHistory(),
    // history: createWebHashHistory(),
    routes,
});

export default router;
