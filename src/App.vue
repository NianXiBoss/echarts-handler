<script setup lang="ts"></script>

<template>
  <div class="common-layout w-full h-full">
    <el-container class="w-full h-full">
      <!--   顶部导航栏   -->
      <el-header class="h-[52px]! bg-[#fff] shadow-sm relative z-[1] px-[24px]! py-[8px]!">
        导航栏
      </el-header>
      <el-container>
        <!--   侧边栏   -->
        <el-aside width="200px" class="bg-[#fff] shadow-sm"> 侧边栏 </el-aside>
        <!--    主区域    -->
        <el-main> 主区域 </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped></style>
