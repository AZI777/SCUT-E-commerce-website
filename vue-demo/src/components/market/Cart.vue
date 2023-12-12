<script setup>
import {ref, onMounted, reactive} from "vue"
import axios from "axios";
import store from "@/store";

const Buy = (scope) => {
  console.log(scope);
  dialogVisible.value = true;
}


const Pay = (scope, address) => {
  console.log(scope.row);
  var productid = scope.row.product.id;
  var quantity = scope.row.quantity;
  var product;
  axios.get('/products', {params: {id: productid}})
      .then(response => {
        product = (response.data)[0];
        const new_product = {
          id: product.id,
          name: product.name,
          price: product.price,
          description: product.description,
          quantity: product.quantity - quantity,
          imageUrl: product.imageUrl,
        }
        axios.put('/products', new_product)
            .then(
                response => {
                  console.log(response.data);
                  const buyinfo = {
                    name: product.name,
                    total_price: product.price * quantity,
                    quantity: quantity,
                    mail: address.mail
                  }
                  console.log(buyinfo);
                  axios.post('/mail', buyinfo).then(response => {
                    console.log(response.data)
                    dialogVisible.value = false;
                    const loginfo={
                      username:scope.row.user.username,
                      productid:scope.row.product.id,
                      productname:scope.row.product.name,
                      price:product.price,
                      quantity:quantity,
                      time:new Date(),
                      total:buyinfo.total_price,
                    }
                    console.log(loginfo)
                    axios.post('/log', loginfo).then(
                        response => {
                          console.log(response.data)

                          var id=scope.row.cartid;
                          axios.delete(`/cart/${id}`)
                              .then(response => {
                                console.log(response)
                                // 删除成功后刷新数据
                                fetchData();
                              })
                              .catch(error => {
                                console.error("删除失败:", error);
                              });
                        })
                  })
                }
            )
      })


}

const Delete = (item) => {
  var id = item.row.cartid
  console.log(item.row.cartid)
  axios.delete(`/cart/${id}`)
      .then(response => {
        console.log(response)
        // 删除成功后刷新数据
        fetchData();
      })
      .catch(error => {
        console.error("删除失败:", error);
      });
};

const dialogVisible = ref(false)

const items = ref([])

const address = reactive({
  mail: ''
})

const fetchData = () => {
  axios.get('/cart', {params: {username: store.state.user.username}})
      .then(response => {
        items.value = response.data;
      })
      .catch(error => {
        console.error("导入购物车失败:", error);
      })
};

onMounted(fetchData)
</script>

<template>
  <el-table
      :data="items"
      style="width: 100%"
      :show-header="false"
  >
    <el-table-column prop="productname" label="商品名称" width="150"/>
    <el-table-column prop="quantity" label="商品数量" width="120"/>
    <el-table-column prop="price" label="商品价格" width="120"/>
    <el-table-column fixed="right" label="Operations" width="120">
      <template #default="scope">
        <el-button link type="primary" size="small" @click="()=>{Buy(scope)}">购买</el-button>
        <el-button link type="primary" size="small" @click="()=>{Delete(scope)}">删除</el-button>
        <el-dialog
            title="付款"
            :model-value="dialogVisible"
            @close="dialogVisible = false">
          <el-form :model="address" class="form-container">
            <el-form-item label="邮箱地址">
              <el-input v-model="address.mail"/>
            </el-form-item>
          </el-form>
          <el-button type="primary" @click="()=>{Pay(scope,address)}">付款</el-button>
        </el-dialog>
      </template>
    </el-table-column>
  </el-table>

</template>


<style scoped>

</style>