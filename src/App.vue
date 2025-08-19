<script setup lang="ts">
import { CopyDocument, Expand, Fold, Menu, Refresh } from '@element-plus/icons-vue'
import { ref } from 'vue'

/**
 * 侧边栏是否展开
 */
const title = ref<string>('收起')
const isUnfold = ref<boolean>(true)
const toggleFold = () => {
  isUnfold.value = !isUnfold.value
  title.value = isUnfold.value ? '收起' : '展开'
}
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
        <el-aside
          class="bg-[#fff] shadow-sm px-6 py-4 flex flex-col transition-all duration-300 ease-in-out"
          :class="isUnfold ? 'w-50!' : 'w-25!'"
        >
          <div
            class="flex items-center justify-center relative w-full h-10 text-[18px] font-bold text-[#1E293B] after:w-full after:h-[1px] after:bg-[#e5e7eb] after:absolute after:mt-3! after:bottom-0"
          >
            <el-icon class="mr-1!"><Menu class="text-[#409eff]" /></el-icon>
            <h4
              class="transition-all duration-350 ease-out overflow-hidden whitespace-nowrap"
              :class="
                isUnfold
                  ? 'opacity-[1] translate-x-[0px] w-auto'
                  : 'opacity-[0] translate-x-[10px] w-0'
              "
            >
              图表类型
            </h4>
          </div>
          <ul class="w-full flex-1"></ul>
          <div
            class="w-full h-10 flex items-center justify-center relative before:w-full before:h-[1px] before:bg-[#e5e7eb] before:absolute before:top-0"
          >
            <el-icon class="text-[20px]! cursor-pointer" :title @click="toggleFold">
              <Fold class="hover:text-[#409eff]" v-if="isUnfold" />
              <Expand class="hover:text-[#409eff]" v-else />
            </el-icon>
          </div>
        </el-aside>
        <!--    主区域    -->
        <el-main> 主区域 </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped></style>
