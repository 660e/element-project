<script setup lang="ts">
import PKG from '../../../package.json';
import SizeComponent from '../components/size.vue';
import DarkComponent from '../components/dark.vue';
</script>

<template>
  <header class="py-2 px-4 flex items-center space-x-2 border-b border-neutral-200 dark:border-neutral-800">
    <img src="/favicon.ico" />
    <div class="text-xl leading-none">{{ PKG.name }}</div>
    <div class="flex-1"></div>
    <div>
      <size-component />
      <dark-component />
    </div>
    <el-divider direction="vertical" />
    <div class="pl-2">Admin</div>
    <el-avatar :size="32" src="https://avatars.githubusercontent.com/u/28943787" />
  </header>
</template>
