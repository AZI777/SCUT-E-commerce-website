<template>
  <el-container>
    <el-header></el-header>
    <el-aside style="width: 200px;margin-top: 20px">
    </el-aside>
    <el-main>
      <product-list-backend></product-list-backend>
    </el-main>
  </el-container>
</template>

<script>
import ProductListBackend from "@/components/market/ProductListBackend.vue";

export default {
  name: 'Backend',
  components: {ProductListBackend},
};
</script>

<style scoped>

</style>

