<script setup lang="ts">
import ToggleDark from './toggle-dark.vue';
</script>

<template>
  <header class="p-2 flex items-center space-x-2 bg-neutral-200 dark:bg-neutral-800">
    <img src="/favicon.ico" />
    <div class="text-xl leading-none">Lorem ipsum dolor sit amet.</div>
    <div class="flex-1"></div>
    <toggle-dark />
    <el-avatar :size="32" src="https://avatars.githubusercontent.com/u/28943787" />
  </header>
</template>
