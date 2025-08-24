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

/**
 * 图表类型
 */
const toggleMenu = [
  { id: 1, icon: 'icon-zhuzhuangtu', title: '柱状图' },
  { id: 2, icon: 'icon-zhexiantu-xianxing', title: '折线图' },
  { id: 3, icon: 'icon-bg-circular', title: '饼图' },
  { id: 4, icon: 'icon-sandiantu_fuzhi', title: '散点图' },
  { id: 5, icon: 'icon-leidatu', title: '雷达图' },
  { id: 6, icon: 'icon-yibiaopan', title: '仪表盘' },
]
const menu = ref<{ id: number; icon: string; title: string }[]>(toggleMenu)

/**
 * 菜单索引
 */
const menuIndex = ref<number>(1)
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
      <el-container class="height-self">
        <!--   侧边栏   -->
        <el-aside
          class="bg-[#fff] shadow-sm px-4 py-4 flex flex-col transition-all duration-300 ease-in-out"
          :class="isUnfold ? 'w-50!' : 'w-20!'"
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
          <ul class="w-full overflow-y-auto h-full scrollbar-hide">
            <li
              class="w-full h-10 rounded-md mt-1! flex items-center cursor-pointer text-[#1E293B] hover:bg-[#2563eb1a] hover:text-[#2563eb]"
              :class="{
                'px-2': isUnfold,
                'justify-center': !isUnfold,
                'bg-[#2563eb1a] text-[#2563eb]': item.id === menuIndex,
              }"
              v-for="item in menu"
              :key="item.id"
              @click="menuIndex = item.id"
            >
              <span class="iconfont text-[20px]!" :class="item.icon"></span>
              <p
                class="text-[16px] ml-1! transition-all duration-350 ease-out overflow-hidden whitespace-nowrap"
                :class="
                  isUnfold
                    ? 'opacity-[1] translate-x-[0px] w-auto'
                    : 'opacity-[0] translate-x-[10px] w-0'
                "
                v-if="isUnfold"
              >
                {{ item.title }}
              </p>
            </li>
          </ul>
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
        <el-main>
          <div class="h-full shadow-sm bg-white rounded-md">
            <el-splitter>
              <el-splitter-panel :collapsible="true" :size="'60%'">
                <div class="h-full flex items-center justify-center">1</div>
              </el-splitter-panel>
              <el-splitter-panel :collapsible="true" >
                <el-splitter layout="vertical">
                  <el-splitter-panel :collapsible="true">
                    <div class="h-full flex items-center justify-center">2</div>
                  </el-splitter-panel>
                  <el-splitter-panel :collapsible="true">
                    <div class="h-full flex items-center justify-center">3</div>
                  </el-splitter-panel>
                </el-splitter>
              </el-splitter-panel>
            </el-splitter>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.height-self {
  height: calc(100% - 52px);
}
</style>
