<template>
  <div>
    <el-button @click="openDialog" class="logbutton">查看日志</el-button>
    <el-dialog :model-value="dialogVisible" title="日志" @close="closeDialog">
      <el-table :data="data" border :fit="true">
        <el-table-column prop="id" label="id"></el-table-column>
        <el-table-column prop="user.username" label="用户名"></el-table-column>
        <el-table-column prop="product.id" label="商品id"></el-table-column>
        <el-table-column prop="productname" label="商品名"></el-table-column>
        <el-table-column prop="price" label="单价"></el-table-column>
        <el-table-column prop="quantity" label="数量"></el-table-column>
        <el-table-column prop="total" label="总价"></el-table-column>
        <el-table-column prop="time" label="时间"></el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script setup>
import {onMounted, ref} from 'vue';
import {ElButton, ElDialog, ElTable, ElTableColumn} from 'element-plus';
import axios from "axios";

const dialogVisible = ref(false);

const data = ref([])

onMounted(() => {
  fetchlog()
})
const fetchlog = () => {
  axios.get('log').then(response => {
    data.value = response.data;
    console.log(data)
  })
}

const openDialog = () => {
  dialogVisible.value = true;
};

const closeDialog = () => {
  dialogVisible.value = false;
};
</script>

<style>

.logbutton {
  position: fixed;
  top: 150px; /* 设置按钮距离顶部的位置 */
  right: 20px; /* 设置按钮距离左侧的位置 */
  z-index: 999; /* 设置按钮的层级，确保按钮在其他元素之上 */
}
</style>