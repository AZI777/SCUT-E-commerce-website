<template>
  <!-- 商品列表容器 -->
  <div class="product-container">
    <!-- 循环遍历商品数组，渲染每个商品项 -->
    <div v-for="product in products" :key="product.id" class="product-item">
      <!-- 引入 ProductsBackend 组件，传递商品信息作为 props -->
      <ProductsBackend
          :name="product.name"
          :price="product.price"
          :quantity="product.quantity"
          :description="product.description"
          :imageUrl="product.imageUrl"
          :id="product.id"
      ></ProductsBackend>
    </div>

    <!-- 上传商品、查看日志和查看记录组件 -->
    <div>
      <!-- 上传商品组件 -->
      <UploadForm></UploadForm>

      <!-- 查看日志组件 -->
      <log></log>

      <!-- 查看记录组件 -->
      <Record></Record>
    </div>
  </div>
</template>

<script>
import ProductsBackend from '@/components/market/ProductsBackend.vue'; // 导入商品组件
import UploadForm from "@/components/market/UploadForm.vue"; // 导入上传商品组件
import Log from "@/components/market/Log.vue"; // 导入查看日志组件
import {onMounted, ref, watch} from "vue";
import axios from "axios";
import Record from "@/components/market/Record.vue"; // 导入查看记录组件

export default {
  name: 'ProductListBackend', // 组件名称
  components: {
    Record,
    Log,
    ProductsBackend,
    UploadForm,
  },
  setup() {
    const products = ref([]); // 商品数组

    // 加载商品信息
    const loadProduct = () => {
      axios
          .get('/products')
          .then(response => {
            if (response && response.status === 200) {
              products.value = response.data;
            }
          });
    };

    // 在组件挂载时加载商品信息
    onMounted(() => {
      loadProduct();
    });

    // 监听商品数组的变化，发生变化时重新加载商品信息
    watch(products, () => loadProduct());

    return {
      products,
      loadProduct,
    };
  }
};
</script>

<style>
/* 样式部分 */
.product-container {
  display: flex;
  flex-wrap: wrap;
}

.product-item {
  width: 20%; /* 一行五列，每个项目占据20%的宽度，并在项目之间留出一些间距 */
  margin-bottom: 20px;
}
</style>
