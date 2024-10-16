<script setup lang="ts">
import PKG from '../../../package.json';

const separatorIcon = IEpArrowRight;
</script>

<template>
  <footer class="h-8 px-2 flex items-center border-t border-neutral-200 dark:border-neutral-800">
    <el-breadcrumb :separator-icon="separatorIcon">
      <el-breadcrumb-item>homepage</el-breadcrumb-item>
      <el-breadcrumb-item>promotion management</el-breadcrumb-item>
      <el-breadcrumb-item>promotion list</el-breadcrumb-item>
      <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="flex-1"></div>
    <div class="text-xs">© {{ PKG.name }} {{ PKG.version }}</div>
  </footer>
</template>
