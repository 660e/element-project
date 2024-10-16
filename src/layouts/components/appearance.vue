<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
const buttonIcon = computed(() => (isDark.value ? IEpSunny : IEpMoon));
</script>

<template>
  <el-tooltip content="Appearance">
    <el-button :icon="buttonIcon" circle text @click="toggleDark()" />
  </el-tooltip>
</template>
