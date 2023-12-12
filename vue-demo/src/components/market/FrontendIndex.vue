<template>
  <el-container>
    <el-header></el-header>
    <el-aside style="width: 200px;margin-top: 20px">
    </el-aside>
    <el-main>
      <product-list-frontend></product-list-frontend>
    </el-main>
  </el-container>
</template>

<script>
import ProductListFrontend from "@/components/market/ProductListFrontend.vue";

export default {
  name: 'Frontend',
  components: {ProductListFrontend},
};
</script>

<style scoped>

</style>

