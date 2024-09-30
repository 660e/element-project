<script setup lang="ts"></script>

<template>
  <div class="h-full rounded border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900">
    <el-scrollbar>
      <slot />
    </el-scrollbar>
  </div>
</template>

<style scoped lang="scss">
.el-scrollbar ::v-deep(.el-scrollbar__view) {
  height: 100%;
}
</style>
