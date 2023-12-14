<template>
  <!-- 主页面模板 -->
  <div>
    <!-- 导航菜单组件 -->
    <nav-menu></nav-menu>
    <!-- 路由视图，用于显示匹配当前路由的组件 -->
    <router-view/>
  </div>
</template>

<script>
import NavMenu from './common/NavMenu'; // 导入导航菜单组件

export default {
  name: 'Home', // 组件名称
  components: {
    NavMenu // 注册导航菜单组件
  }
}
</script>

<style scoped>
/* 这里可以写当前组件的样式，使用 scoped 属性保证样式只作用于当前组件 */
</style>
