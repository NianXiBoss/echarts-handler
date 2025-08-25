<script setup lang="ts">
const props = defineProps({
  configureName: {
    type: String,
    default: '配置项'
  }
})
</script>

<template>
  <div class="p-3 bg-white rounded-md shadow-sm">
    <h3
      class="text-[18px] text-[#1E293B] flex items-center relative after:w-full after:h-[1px] after:bg-[#e5e7eb] after:absolute after:mt-3! after:bottom-0"
    >
      {{ props.configureName }}
    </h3>
    <div class="w-full">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped></style>
