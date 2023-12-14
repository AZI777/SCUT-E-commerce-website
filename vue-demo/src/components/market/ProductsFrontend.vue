<template>
  <!-- 商品卡片容器 -->
  <el-card :body-style="{ padding: '0px' }" style="width: 200px; height: 300px; position: relative">
    <!-- 商品图片 -->
    <img
        :src=imageUrl
        class="image"
    />
    <!-- 商品信息 -->
    <div style="padding: 14px">
      <!-- 商品基本信息 -->
      <span>{{ name }}:{{ price }}元  库存:{{ quantity }}</span>
      <br>
      <!-- 商品描述 -->
      <span class="description">{{ description }}</span>
    </div>
    <!-- 加购按钮 -->
    <el-button style="position: absolute; bottom: 5px; left: 0; width: 200px;" @click="openFormDialog">加购</el-button>
  </el-card>

  <!-- 购买信息的弹窗 -->
  <el-dialog title="购买信息" :model-value="dialogVisible" @close="closeFormDialog" class="dialog-container">
    <!-- 购买数量的表单 -->
    <el-form :model="form" class="form-container">
      <el-form-item label="购买数量">
        <el-input v-model="form.quantity"/>
      </el-form-item>
      <!-- 操作按钮 -->
      <el-form-item>
        <el-button type="primary" @click="addToCart">完成</el-button>
        <el-button type="default" @click="closeFormDialog">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>
import { reactive, ref } from "vue";
import axios from "axios";
import store from "@/store";

export default {
  name: 'ProductsFrontend', // 组件名称
  components: {}, // 引入的子组件
  setup(props) {
    const dialogVisible = ref(false); // 弹窗显示状态

    // 打开购买信息弹窗
    const openFormDialog = () => {
      dialogVisible.value = true;
    };

    // 关闭购买信息弹窗
    const closeFormDialog = () => {
      dialogVisible.value = false;
    };

    // 购买信息的响应式对象
    const form = reactive({
      quantity: 1,
    });

    // 将商品添加到购物车
    const addToCart = () => {
      const payload = {
        quantity: form.quantity,
        productid: props.id,
        productname: props.name,
        price: props.price,
        username: store.state.user.username,
      };

      // 发送请求到后端，将商品添加到购物车
      axios.post('/cart', payload)
          .then(response => {
            console.log('加入购物车:', response.data);
            closeFormDialog();
          })
          .catch(error => {
            console.error("加入购物车失败:", error);
          });
    };

    // 删除商品信息
    const onDelete = () => {
      const payload = {
        id: props.id,
        name: props.name,
        description: props.description,
        quantity: props.quantity,
        imageUrl: props.imageUrl,
        price: props.price,
      };
      axios.post('/delete', payload)
          .then(closeFormDialog);
    };

    // 返回响应式对象和方法供模板使用
    return { dialogVisible, openFormDialog, closeFormDialog, form, addToCart, onDelete };
  },

  props: {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      default: 1,
    },
    description: {
      type: String,
      default: 'default description',
    },
    imageUrl: {
      type: String,
      required: true,
    },
    id: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
/* 样式部分 */
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
