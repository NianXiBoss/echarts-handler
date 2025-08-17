<script setup lang="ts">
import { CopyDocument, Refresh } from '@element-plus/icons-vue'
</script>

<template>
  <div class="common-layout w-full h-full">
    <el-container class="w-full h-full">
      <!--   顶部导航栏   -->
      <el-header
        class="h-[52px]! bg-[#fff] shadow-sm relative z-[1] px-[24px]! py-[8px]! flex items-center justify-between"
      >
        <div class="flex items-center">
          <img src="@/assets/logo.png" alt="系统图标" class="w-8" />
          <h3 class="ml-3! font-bold text-[20px] text-[#1E293B]">ECharts-可视化配置平台</h3>
        </div>
        <div>
          <el-button :icon="Refresh">重置</el-button>
          <el-button :icon="CopyDocument" type="primary">复制代码</el-button>
        </div>
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
