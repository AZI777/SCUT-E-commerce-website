<template>
  <el-card :body-style="{ padding: '0px' }" style="width: 200px;height: 300px;position: relative">
    <img
        :src=imageUrl
        class="image"
    />
    <div style="padding: 14px">
      <span>{{ name }}:{{ price }}元  库存:{{ quantity }}</span>
      <br>
      <span class="description">{{ description }}</span>
    </div>
    <el-button style="position: absolute;bottom: 5px;left:0;width: 200px;" @click="openFormDialog">加购</el-button>
  </el-card>

  <el-dialog title="购买信息" :model-value="dialogVisible" @close="closeFormDialog" class="dialog-container">
    <el-form :model="form" class="form-container">
      <el-form-item label="购买数量">
        <el-input v-model="form.quantity"/>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="addToCart">完成</el-button>
        <el-button type="default" @click="closeFormDialog">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>


import {reactive, ref} from "vue";
import axios from "axios";
import store from "@/store";

export default {
  name: 'ProductsFrontend',
  components: {},
  setup(props) {
    const dialogVisible = ref(false)

    const openFormDialog = () => {
      dialogVisible.value = true
    }

    const closeFormDialog = () => {
      dialogVisible.value = false
    }

    const form = reactive({
      quantity: 1,
    })

    const addToCart = () => {
      // 构建请求参数，包括商品ID和要更新的字段
      const payload = {
        quantity:form.quantity,
        productid: props.id,
        productname:props.name,
        price: props.price,
        username:store.state.user.username
      }
      console.log(payload)
      // 发送请求到后端，更新商品字段
      axios.post('/cart', payload)
          .then(response => {
            console.log('加入购物车:', response.data);
            closeFormDialog();
          })
          .catch(error => {
            // 请求失败处理逻辑
            console.error("加入购物车失败:", error);
          });

    };

    const onDelete = () => {
      const payload = {
        id: props.id,
        name: props.name,
        description: props.description,
        quantity: props.quantity,
        imageUrl: props.imageUrl,
        price: props.price
      };
      axios.post('/delete', payload)
          .then(closeFormDialog)
    }


    return {dialogVisible, openFormDialog, closeFormDialog, form, addToCart, onDelete}
  },

  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true
    },
    quantity: {
      type: Number,
      default: 1
    },
    description: {
      type: String,
      default: 'default description'
    },
    imageUrl: {
      type: String,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  data() {
    return {}
  }

};
</script>

<style>

.image {
  width: 200px;
  height: 200px;
  display: block;
  object-fit: cover;
}

.description {
  width: 200px;
  height: 80px;
}
</style>