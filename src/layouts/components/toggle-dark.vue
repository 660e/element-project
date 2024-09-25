<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import Moon from '~icons/ep/moon';
import Sunny from '~icons/ep/sunny';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <el-tooltip :content="isDark ? 'Light' : 'Dark'">
    <el-button :icon="isDark ? Sunny : Moon" @click="toggleDark()" circle />
  </el-tooltip>
</template>
