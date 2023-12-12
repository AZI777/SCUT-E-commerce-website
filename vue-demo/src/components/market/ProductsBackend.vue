<template>
  <el-card :body-style="{ padding: '0px' }" style="width: 200px;height: 300px;position: relative">
    <img
        :src=imageUrl
        class="image"
        @click="openFormDialog"
    />
    <div style="padding: 14px">
      <span>{{ name }}:{{ price }}元  库存:{{ quantity }}</span>
      <br>
      <span class="description">{{ description }}</span>
    </div>
    <!--    <el-button style="position: absolute;bottom: 5px;left:0;width: 200px;">加购</el-button>-->
  </el-card>

  <el-dialog title="编辑商品信息" :model-value="dialogVisible" @close="closeFormDialog" class="dialog-container">
    <el-form :model="form" class="form-container">
      <el-form-item label="商品名称">
        <el-input v-model="form.name"/>
      </el-form-item>
      <el-form-item label="商品描述">
        <el-input v-model="form.description"/>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input v-model="form.price"/>
      </el-form-item>
      <el-form-item label="商品数量">
        <el-input v-model="form.quantity"/>
      </el-form-item>
      <el-form-item label="图片链接">
        <el-input v-model="form.imageUrl"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button type="danger" @click="onDelete">删除</el-button>
        <el-button type="default" @click="closeFormDialog">取消</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>

<script>


// eslint-disable-next-line no-unused-vars
import {reactive, ref} from "vue";
// eslint-disable-next-line no-unused-vars
import axios from "axios";

export default {
  name: 'ProductsBackend',
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
      id: props.id,
      name: props.name,
      description: props.description,
      quantity: props.quantity,
      imageUrl: props.imageUrl,
      price: props.price,
    })

    const onSubmit = () => {
      // 构建请求参数，包括商品ID和要更新的字段
      const payload = {
        id: form.id,
        name: form.name,
        description: form.description,
        quantity: form.quantity,
        imageUrl: form.imageUrl,
        price: form.price
      }
      // 发送请求到后端，更新商品字段
      axios.put('/products', payload)
          .then(response => {
            console.log('数据更新:', response.data);
            closeFormDialog();
          })
          .catch(error => {
            // 请求失败处理逻辑
            console.error("更新商品信息时出错", error);
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
          .then(response => {
                console.log(response.data);
                closeFormDialog();
              }
          )
    }


    return {dialogVisible, openFormDialog, closeFormDialog, form, onSubmit, onDelete}
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