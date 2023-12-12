import { createApp } from 'vue'
import { createStore } from 'vuex'

const app = createApp(/* App component */)

const store = createStore({
    state() {
        return {
            user: {
                username: window.localStorage.getItem('user') ? JSON.parse(window.localStorage.getItem('user')).username : ''
            }
        }
    },
    mutations: {
        login(state, user) {
            state.user = user
            window.localStorage.setItem('user', JSON.stringify(user))
        }
    }
})

app.use(store)

// 组件实例化和挂载...
app.mount(/* DOM 元素 */)

export default store;