<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import Sunny from '~icons/ep/Sunny';
import Moon from '~icons/ep/Moon';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <el-tooltip content="Appearance">
    <el-button circle text :icon="isDark ? Sunny : Moon" @click="toggleDark()" />
  </el-tooltip>
</template>
