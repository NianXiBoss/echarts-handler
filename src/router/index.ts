import { createRouter, createWebHistory } from 'vue-router'
import HistogramView from '../views/HistogramView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'histogram',
      component: HistogramView,
      meta: {
        id: 1,
        title: '柱状图',
        icon: 'zhuzhuangtu',
      },
    },
    {
      path: '/LineChart',
      name: 'LineChart',
      meta: {
        id: 2,
        title: '折线图',
        icon: 'zhexiantu-xianxing',
      },
      component: () => import('@/views/LineChartView.vue'),
    },
    {
      path: '/PieChart',
      name: 'PieChart',
      meta: {
        id: 3,
        title: '饼图',
        icon: 'bg-circular',
      },
      component: () => import('@/views/PieChartView.vue'),
    },
    {
      path: '/ScatterPlot',
      name: 'ScatterPlot',
      meta: {
        id: 4,
        title: '散点图',
        icon: 'sandiantu_fuzhi',
      },
      component: () => import('@/views/ScatterPlotView.vue'),
    },
    {
      path: '/RadarMap',
      name: 'RadarMap',
      meta: {
        id: 5,
        title: '雷达图',
        icon: 'leidatu',
      },
      component: () => import('@/views/RadarMapView.vue'),
    },
    {
      path: '/Dashboard',
      name: 'Dashboard',
      meta: {
        id: 6,
        title: '仪表盘',
        icon: 'yibiaopan',
      },
      component: () => import('@/views/DashboardView.vue'),
    },
  ],
})

export default router
