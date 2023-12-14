<template>
  <!-- 日志按钮和弹窗容器 -->
  <div>
    <!-- 查看日志按钮 -->
    <el-button @click="openDialog" class="logbutton">查看日志</el-button>

    <!-- 日志信息弹窗 -->
    <el-dialog :model-value="dialogVisible" title="日志" @close="closeDialog">
      <!-- 日志信息表格 -->
      <el-table :data="data" border :fit="true">
        <!-- 表格列定义 -->
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
import { onMounted, ref } from 'vue';
import { ElButton, ElDialog, ElTable, ElTableColumn } from 'element-plus';
import axios from "axios";

const dialogVisible = ref(false); // 弹窗显示状态
const data = ref([]); // 日志数据

// 组件挂载时获取日志数据
onMounted(() => {
  fetchlog();
});

// 获取日志数据
const fetchlog = () => {
  axios.get('log').then(response => {
    data.value = response.data;
    console.log(data);
  });
};

// 打开日志弹窗
const openDialog = () => {
  dialogVisible.value = true;
};

// 关闭日志弹窗
const closeDialog = () => {
  dialogVisible.value = false;
};
</script>

<style>
/* 样式部分 */
.logbutton {
  position: fixed;
  top: 150px; /* 设置按钮距离顶部的位置 */
  right: 20px; /* 设置按钮距离左侧的位置 */
  z-index: 999; /* 设置按钮的层级，确保按钮在其他元素之上 */
}
</style>
