<template>
  <body id="poster">
  <el-form class="login-container" label-position="left"
           label-width="0px">
    <h3 class="login_title">系统登录</h3>
    <el-form-item>
      <el-input type="text" v-model="loginForm.username"
                auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item>
      <el-input type="password" v-model="loginForm.password"
                auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background: #505458;border: none" @click="login">登录</el-button>
    </el-form-item>
    <el-form-item style="width: 100%">
      <el-button type="primary" style="width: 100%;background: #505458;border: none" @click="sign">注册</el-button>
    </el-form-item>
  </el-form>
  </body>
</template>

<script>
import {ref} from 'vue';
import axios from "axios";
import router from "@/router";
import store from '../store'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  setup() {
    const loginForm = ref({
      username: 'admin',
      password: 'admin'
    });

    const login = () => {
      console.log(store.state);
      axios
          .post('/login', {
            username: loginForm.value.username,
            password: loginForm.value.password
          })
          .then(successResponse => {
            if (successResponse.data.code === 200) {
              store.commit('login', loginForm.value);
              const path = router.currentRoute.value.query.redirect;
              console.log(path);
              // router.replace({ path: path === '/' || path === undefined ? '/index' : path });
              router.replace({path: path === '/' || path === undefined ? '/frontend' : path});
            } else {
              alert('账号或密码错误！');
            }
          })
          .catch();
    };

    const sign = () => {
      console.log(store.state);
      axios
          .put('/login', {
            username: loginForm.value.username,
            password: loginForm.value.password
          })
          .then(successResponse => {
            if (successResponse.data.code === 200) {
              store.commit('login', loginForm.value);
              const path = router.currentRoute.value.query.redirect;
              router.replace({path: path === '/' || path === undefined ? '/frontend' : path});
            } else {
              alert('账号或密码错误！');
            }
          })
          .catch();
    };

    return {
      loginForm,
      login,
      sign,
    };
  }
};
</script>

<style>
.login-container {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 90px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}

.login_title {
  margin: 0px auto 40px auto;
  text-align: center;
  color: #505458;
}

#poster {
  background: url("../assets/eva.jpg") no-repeat;
  background-position: center;
  height: 100%;
  width: 100%;
  background-size: cover;
  position: fixed;
}

body {
  margin: 0px;
}


</style>