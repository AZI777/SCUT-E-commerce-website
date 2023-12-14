<template>
  <!-- el-container 用于布局的容器 -->
  <el-container>
    <!-- el-header 用于页面的头部 -->
    <el-header></el-header>

    <!-- el-aside 用于侧边栏，设置了宽度为 200px，上边距为 20px -->
    <el-aside style="width: 200px; margin-top: 20px">
      <!-- 这里可以放置一些侧边栏的内容或组件 -->
    </el-aside>

    <!-- el-main 用于页面的主体部分 -->
    <el-main>
      <!-- 引入了名为 ProductListBackend 的组件，用于展示后端商品列表 -->
      <product-list-backend></product-list-backend>
    </el-main>
  </el-container>
</template>

<script>
import ProductListBackend from "@/components/market/ProductListBackend.vue"; // 导入 ProductListBackend 组件

export default {
  name: 'Backend', // 组件名称
  components: {
    ProductListBackend // 注册 ProductListBackend 组件
  },
};
</script>

<style scoped>
/* 这里可以写当前组件的样式，使用 scoped 属性保证样式只作用于当前组件 */
</style>
