<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <el-tooltip content="Appearance">
    <el-button circle text @click="toggleDark()">
      <el-icon>
        <i-ep-sunny v-if="isDark" />
        <i-ep-moon v-else />
      </el-icon>
    </el-button>
  </el-tooltip>
</template>
