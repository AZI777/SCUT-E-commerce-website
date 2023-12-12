<template>
  <div class="product-container">
    <div v-for="product in products" :key="product.id" class="product-item">
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
import ProductsFrontend from "@/components/market/ProductsFrontend.vue";
import {onMounted, ref, watch} from "vue";
import axios from "axios";

export default {
  name: 'ProductListFrontend',
  components: {
    ProductsFrontend,

  },
  setup() {
    const products = ref([]);

    const loadProduct = () => {
      axios
          .get('/products')
          .then(response => {
            if (response && response.status === 200) {
              products.value = response.data;
            }
          });
    };

    // 在组合式 API 中使用 onMounted
    onMounted(() => {
      loadProduct();
    });

    watch(products, () => loadProduct())

    return {
      products,
      loadProduct
    };
  }
};
</script>

<style>
.product-container {
  display: flex;
  flex-wrap: wrap;
//justify-content: space-between;
}

.product-item {
  width: 20%; /* 一行五列，每个项目占据20%的宽度，并在项目之间留出一些间距 */
  margin-bottom: 20px;
}
</style>