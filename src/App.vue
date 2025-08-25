<script setup lang="ts">
import { CopyDocument, Expand, Fold, Menu, Refresh } from '@element-plus/icons-vue'
import { ref } from 'vue'
import router from '@/router'

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
 * 切换页面
 */
const changePage = (id: number, name: string, title: string) => {
  menuIndex.value = id
  chartTitle.value = title
  router.push({ name })
}

/**
 * 初始化
 */
const menu = ref<[]>([]) as any // 导航
const menuIndex = ref<number>(1) // 导航索引
const chartTitle = ref<string>('')
onMounted(() => {
  menu.value = router.getRoutes()
  chartTitle.value = menu.value[0].meta.title
})
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
                'bg-[#2563eb1a] text-[#2563eb]': item.meta.id === menuIndex,
              }"
              v-for="item in menu"
              :key="item.meta.id"
              @click="changePage(item.meta.id, item.name, item.meta.title)"
            >
              <span class="iconfont text-[20px]!" :class="`icon-${item.meta.icon}`"></span>
              <p
                class="text-[16px] ml-1! transition-all duration-350 ease-out overflow-hidden whitespace-nowrap"
                :class="
                  isUnfold
                    ? 'opacity-[1] translate-x-[0px] w-auto'
                    : 'opacity-[0] translate-x-[10px] w-0'
                "
                v-if="isUnfold"
              >
                {{ item.meta.title }}
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
          <div class="h-full rounded-md">
            <el-splitter>
              <el-splitter-panel :collapsible="true" :size="'60%'">
                <div class="w-full h-full p-[10px] overflow-y-auto">
                  <h3 class="text-[20px] font-bold text-[#1E293B] mb-4!">{{ chartTitle }}配置</h3>
                  <router-view></router-view>
                </div>
              </el-splitter-panel>
              <el-splitter-panel :collapsible="true">
                <el-splitter layout="vertical">
                  <el-splitter-panel :collapsible="true" :size="'60%'">
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
