<script setup lang="ts">
import ToggleDark from './toggle-dark.vue';
</script>

<template>
  <header class="p-2 flex space-x-2 bg-neutral-200 dark:bg-neutral-800">
    <div class="flex-1"></div>
    <toggle-dark />
    <el-avatar :size="32" src="https://avatars.githubusercontent.com/u/28943787" />
  </header>
</template>
