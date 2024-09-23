<script setup lang="ts"></script>

<template>
  <aside class="flex flex-col">
    <el-scrollbar class="flex-1">
      <el-menu>
        <el-sub-menu index="1">
          <template #title>
            <el-icon><i-ep-menu /></el-icon>
            <span>Navigator One</span>
          </template>
          <el-menu-item index="1-1">item one</el-menu-item>
          <el-menu-item index="1-2">item two</el-menu-item>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><i-ep-menu /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><i-ep-menu /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><i-ep-menu /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-scrollbar>
    <div class="h-10 bg-red-300"></div>
  </aside>
</template>
