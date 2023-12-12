<template>
  <div>
    <el-button  @click="openFormDialog" class="button">添加商品</el-button>
    <el-dialog title="商品信息" :model-value="dialogVisible" @close="closeFormDialog" class="dialog-container">
      <el-form :model="form"  class="form-container">
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
          <el-button type="primary" @click="onSubmit">完成</el-button>
          <el-button type="primary" @click="closeFormDialog">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import {reactive} from 'vue'
import {ref} from "vue";
import axios from "axios";

export default {
  name: "UploadForm",
  setup() {


    const dialogVisible = ref(false)

    const openFormDialog = () => {
      dialogVisible.value = true;
    }

    const closeFormDialog = () => {
      dialogVisible.value = false;
    }

    const form = reactive({
      name: '',
      description: '',
      quantity: 1,
      imageUrl: '',
      price:0,
    })

    const onSubmit = () => {
      console.log(form)
      axios.post('/products', form)
          .then(response => {
            // 处理成功响应
            console.log('Data added successfully:', response.data);
          })
          .catch(error => {
            // 处理错误
            console.error('Error adding data:', error);
          });
      dialogVisible.value=false
    }
    return {
      dialogVisible,
      form,
      onSubmit,
      openFormDialog,
      closeFormDialog,
    }
  }

}
</script>

<style>
.form-container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.dialog-container{

}
.button{
  position: fixed;
  top: 100px; /* 设置按钮距离顶部的位置 */
  right: 20px; /* 设置按钮距离左侧的位置 */
  z-index: 999; /* 设置按钮的层级，确保按钮在其他元素之上 */
}
</style>