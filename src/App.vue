<script setup lang="ts">
import { CopyDocument, Fold, Refresh } from '@element-plus/icons-vue'
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
        <el-aside class="bg-[#fff] shadow-sm w-50! px-6 py-4 flex flex-col">
          <h4
            class="text-[18px] font-bold text-[#1E293B] text-center after:w-full after:h-[1px] after:bg-[#e5e7eb] after:block after:mt-2!"
          >
            图表类型
          </h4>
          <ul class="w-full flex-1"></ul>
          <div class="w-full h-10 flex items-center justify-center relative before:w-full before:h-[1px] before:bg-[#e5e7eb] before:absolute before:top-0">
            <el-icon class="text-[20px]! cursor-pointer"><Fold class="hover:text-[#409eff]"/></el-icon>
          </div>
        </el-aside>
        <!--    主区域    -->
        <el-main> 主区域 </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped></style>
