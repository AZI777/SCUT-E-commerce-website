import {createApp} from 'vue';
import App from './App';
import router from './router';
import ElementPlus from 'element-plus';
import store from './store'
import 'element-plus/dist/index.css';


import axios from 'axios';
//前端请求发送到后端端口
axios.defaults.baseURL = 'http://8.134.12.35:8443/api';

const app = createApp(App);
app.config.productionTip = false;

// 将axios实例添加到app的全局属性中
app.config.globalProperties.$axios = axios;

router.beforeEach((to, from, next) => {
    if (to.meta.requireAuth) {
        if (store.state.user.username) {
            next();
        } else {
            next({
                path: 'login',
                query: {redirect: to.fullPath}
            });
        }
    } else {
        next();
    }
});

app.use(router);
app.use(ElementPlus)
app.use(store)
app.mount('#app');