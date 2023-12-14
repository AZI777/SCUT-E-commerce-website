<template>
  <!-- 商品卡片容器 -->
  <el-card :body-style="{ padding: '0px' }" style="width: 200px; height: 300px; position: relative">
    <!-- 商品图片 -->
    <img
        :src=imageUrl
        class="image"
        @click="openFormDialog"
    />
    <!-- 商品信息 -->
    <div style="padding: 14px">
      <!-- 商品基本信息 -->
      <span>{{ name }}:{{ price }}元  库存:{{ quantity }}</span>
      <br>
      <!-- 商品描述 -->
      <span class="description">{{ description }}</span>
    </div>

    <!-- 编辑商品信息的弹窗 -->
    <el-dialog title="编辑商品信息" :model-value="dialogVisible" @close="closeFormDialog" class="dialog-container">
      <!-- 商品信息编辑表单 -->
      <el-form :model="form" class="form-container">
        <!-- 商品名称 -->
        <el-form-item label="商品名称">
          <el-input v-model="form.name"/>
        </el-form-item>
        <!-- 商品描述 -->
        <el-form-item label="商品描述">
          <el-input v-model="form.description"/>
        </el-form-item>
        <!-- 商品价格 -->
        <el-form-item label="商品价格">
          <el-input v-model="form.price"/>
        </el-form-item>
        <!-- 商品数量 -->
        <el-form-item label="商品数量">
          <el-input v-model="form.quantity"/>
        </el-form-item>
        <!-- 商品图片链接 -->
        <el-form-item label="图片链接">
          <el-input v-model="form.imageUrl"/>
        </el-form-item>
        <!-- 操作按钮 -->
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
          <el-button type="danger" @click="onDelete">删除</el-button>
          <el-button type="default" @click="closeFormDialog">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </el-card>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { reactive, ref } from "vue";
// eslint-disable-next-line no-unused-vars
import axios from "axios";

export default {
  name: 'ProductsBackend', // 组件名称
  components: {}, // 引入的子组件
  setup(props) {
    const dialogVisible = ref(false); // 弹窗显示状态

    const openFormDialog = () => {
      dialogVisible.value = true; // 打开弹窗
    };

    const closeFormDialog = () => {
      dialogVisible.value = false; // 关闭弹窗
    };

    // 商品信息的响应式对象
    const form = reactive({
      id: props.id,
      name: props.name,
      description: props.description,
      quantity: props.quantity,
      imageUrl: props.imageUrl,
      price: props.price,
    });

    // 提交编辑后的商品信息
    const onSubmit = () => {
      const payload = {
        id: form.id,
        name: form.name,
        description: form.description,
        quantity: form.quantity,
        imageUrl: form.imageUrl,
        price: form.price,
      };
      axios.put('/products', payload)
          .then(response => {
            console.log('数据更新:', response.data);
            closeFormDialog();
          })
          .catch(error => {
            console.error("更新商品信息时出错", error);
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
          .then(response => {
            console.log(response.data);
            closeFormDialog();
          });
    };

    // 返回响应式对象和方法供模板使用
    return { dialogVisible, openFormDialog, closeFormDialog, form, onSubmit, onDelete };
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
