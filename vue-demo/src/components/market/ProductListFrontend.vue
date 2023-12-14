<template>
  <!-- 商品列表容器 -->
  <div class="product-container">
    <!-- 循环遍历商品数组，渲染每个商品项 -->
    <div v-for="product in products" :key="product.id" class="product-item">
      <!-- 引入 ProductsFrontend 组件，传递商品信息作为 props -->
      <ProductsFrontend
          :name="product.name"
          :price="product.price"
          :quantity="product.quantity"
          :description="product.description"
          :imageUrl="product.imageUrl"
          :id="product.id"
      ></ProductsFrontend>
    </div>
  </div>
</template>

<script>
import ProductsFrontend from "@/components/market/ProductsFrontend.vue"; // 导入前端商品组件
import {onMounted, ref, watch} from "vue";
import axios from "axios";

export default {
  name: 'ProductListFrontend', // 组件名称
  components: {
    ProductsFrontend, // 注册前端商品组件
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
