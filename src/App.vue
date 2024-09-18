<script setup lang="ts">
const size = 'default';
</script>

<template>
  <el-config-provider :size="size">
    <router-view />
  </el-config-provider>
</template>
