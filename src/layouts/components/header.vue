<script setup lang="ts">
import PKG from '../../../package.json';
import ToggleSize from './toggle-size.vue';
import ToggleDark from './toggle-dark.vue';
</script>

<template>
  <header class="p-2 flex items-center space-x-2 border-b border-neutral-200 dark:border-neutral-800">
    <img src="/favicon.ico" />
    <div class="text-xl leading-none">{{ PKG.name }}</div>
    <div class="flex-1"></div>
    <toggle-size />
    <toggle-dark />
    <el-avatar :size="32" src="https://avatars.githubusercontent.com/u/28943787" />
  </header>
</template>
