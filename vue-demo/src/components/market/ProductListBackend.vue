<template>
  <div class="product-container">
    <div v-for="product in products" :key="product.id" class="product-item">
      <ProductsBackend
          :name="product.name"
          :price="product.price"
          :quantity="product.quantity"
          :description="product.description"
          :imageUrl="product.imageUrl"
          :id="product.id"
      ></ProductsBackend>
    </div>
    <div>
      <UploadForm></UploadForm>
      <log></log>
      <Record></Record>
    </div>
  </div>
</template>

<script>
import ProductsBackend from '@/components/market/ProductsBackend.vue';
import UploadForm from "@/components/market/UploadForm.vue";
import Log from "@/components/market/Log.vue"
import {onMounted, ref, watch} from "vue";
import axios from "axios";
import Record from "@/components/market/Record.vue";

export default {
  name: 'ProductListBackend',
  components: {
    Record,
    Log,
    ProductsBackend,
    UploadForm,


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
}

.product-item {
  width: 20%; /* 一行五列，每个项目占据20%的宽度，并在项目之间留出一些间距 */
  margin-bottom: 20px;
}
</style>