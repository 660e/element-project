<script setup lang="ts"></script>

<template>
  <aside class="h-full flex flex-col">
    <el-menu class="flex-1 h-full overflow-y-auto">
      <el-sub-menu index="1">
        <template #title>
          <span>Navigator One</span>
        </template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-sub-menu>
      <el-menu-item index="2">
        <span>Navigator Two</span>
      </el-menu-item>
      <el-menu-item index="3">
        <span>Navigator Three</span>
      </el-menu-item>
      <el-menu-item index="4">
        <span>Navigator Four</span>
      </el-menu-item>
    </el-menu>
    <div class="h-96 bg-red-300">bottom</div>
  </aside>
</template>
