// 导入Vue Router相关模块
import { createRouter, createWebHistory } from 'vue-router';

// 导入组件
import AppIndex from '@/components/home/AppIndex.vue'; // 主页组件
import Login from '@/components/Login.vue'; // 登录组件
import Home from "@/components/Home.vue"; // 主页面组件
import BackendIndex from "@/components/market/BackendIndex.vue"; // 后端页面组件
import FrontendIndex from "@/components/market/FrontendIndex.vue"; // 前端页面组件
import CartIndex from "@/components/market/CartIndex.vue"; // 购物车页面组件

// 定义路由配置
const routes = [
    {
        path: '/home',
        name: 'Home',
        component: Home,
        redirect: '/backend', // 重定向到后端页面
        children: [
            {
                path: '/index',
                name: 'AppIndex',
                component: AppIndex,
                redirect:'/login', // 重定向到登录页面
                meta: {
                    requireAuth: true // 设置路由元信息，标识需要登录才能访问
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
        redirect: '/index', // 根路径重定向到首页
    }
];

// 创建路由实例
const router = createRouter({
    history: createWebHistory(),
    routes,
});

// 导出路由实例
export default router;
