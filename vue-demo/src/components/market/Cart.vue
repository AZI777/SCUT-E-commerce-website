<script setup>
import { ref, onMounted, reactive } from "vue";
import axios from "axios";
import store from "@/store";

// 购买操作
const Buy = (scope) => {
  console.log(scope);
  dialogVisible.value = true;
};

// 付款操作
const Pay = (scope, address) => {
  console.log(scope.row);
  var productid = scope.row.product.id;
  var quantity = scope.row.quantity;
  var product;

  // 获取商品信息
  axios.get('/products', { params: { id: productid } })
      .then(response => {
        product = (response.data)[0];

        // 更新商品信息
        const new_product = {
          id: product.id,
          name: product.name,
          price: product.price,
          description: product.description,
          quantity: product.quantity - quantity,
          imageUrl: product.imageUrl,
        };

        // 提交更新
        axios.put('/products', new_product)
            .then(response => {
              console.log(response.data);

              // 提交购买信息
              const buyinfo = {
                name: product.name,
                total_price: product.price * quantity,
                quantity: quantity,
                mail: address.mail
              };

              console.log(buyinfo);

              // 发送购买信息邮件
              axios.post('/mail', buyinfo).then(response => {
                console.log(response.data);
                dialogVisible.value = false;

                // 提交购买记录
                const loginfo = {
                  username: scope.row.user.username,
                  productid: scope.row.product.id,
                  productname: scope.row.product.name,
                  price: product.price,
                  quantity: quantity,
                  time: new Date(),
                  total: buyinfo.total_price,
                };

                console.log(loginfo);

                // 发送购买记录请求
                axios.post('/log', loginfo).then(
                    response => {
                      console.log(response.data);

                      // 删除购物车中的商品
                      var id = scope.row.cartid;
                      axios.delete(`/cart/${id}`)
                          .then(response => {
                            console.log(response);

                            // 删除成功后刷新数据
                            fetchData();
                          })
                          .catch(error => {
                            console.error("删除失败:", error);
                          });
                    }
                );
              });
            });
      });
};

// 删除购物车中的商品
const Delete = (item) => {
  var id = item.row.cartid;
  console.log(item.row.cartid);

  axios.delete(`/cart/${id}`)
      .then(response => {
        console.log(response);

        // 删除成功后刷新数据
        fetchData();
      })
      .catch(error => {
        console.error("删除失败:", error);
      });
};

const dialogVisible = ref(false);

// 购物车中的商品列表
const items = ref([]);

// 付款时的地址信息
const address = reactive({
  mail: ''
});

// 获取购物车中的商品数据
const fetchData = () => {
  axios.get('/cart', { params: { username: store.state.user.username } })
      .then(response => {
        items.value = response.data;
      })
      .catch(error => {
        console.error("导入购物车失败:", error);
      });
};

// 组件挂载时获取购物车数据
onMounted(fetchData);
</script>

<template>
  <!-- 购物车表格 -->
  <el-table
      :data="items"
      style="width: 100%"
      :show-header="false"
  >
    <!-- 表格列定义 -->
    <el-table-column prop="productname" label="商品名称" width="150"/>
    <el-table-column prop="quantity" label="商品数量" width="120"/>
    <el-table-column prop="price" label="商品价格" width="120"/>

    <!-- 表格操作列 -->
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default="scope">
        <!-- 购买按钮 -->
        <el-button link type="primary" size="small" @click="()=>{Buy(scope)}">购买</el-button>

        <!-- 删除按钮 -->
        <el-button link type="primary" size="small" @click="()=>{Delete(scope)}">删除</el-button>

        <!-- 付款弹窗 -->
        <el-dialog
            title="付款"
            :model-value="dialogVisible"
            @close="dialogVisible = false"
        >
          <el-form :model="address" class="form-container">
            <!-- 邮箱地址输入框 -->
            <el-form-item label="邮箱地址">
              <el-input v-model="address.mail"/>
            </el-form-item>
          </el-form>

          <!-- 付款按钮 -->
          <el-button type="primary" @click="()=>{Pay(scope,address)}">付款</el-button>
        </el-dialog>
      </template>
    </el-table-column>
  </el-table>
</template>

<style scoped>
/* 这里可以写当前组件的样式，使用 scoped 属性保证样式只作用于当前组件 */
</style>
