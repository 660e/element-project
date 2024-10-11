<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';
import Sunny from '~icons/ep/Sunny';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <el-tooltip content="Appearance">
    <el-button :icon="Sunny" circle text @click="toggleDark()" />
  </el-tooltip>
</template>
