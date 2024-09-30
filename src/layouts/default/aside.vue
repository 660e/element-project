<script setup lang="ts">
const isCollapse = ref(false);
</script>

<template>
  <aside class="flex flex-col border-r border-neutral-200 dark:border-neutral-800">
    <el-scrollbar class="flex-1">
      <el-menu :collapse="isCollapse">
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

    <div
      class="h-8 cursor-pointer flex justify-center items-center duration-200 border-t border-neutral-200 dark:border-neutral-800 hover:bg-neutral-100 hover:dark:bg-black"
      @click="isCollapse = !isCollapse"
    >
      <el-icon>
        <i-ep-d-arrow-right v-if="isCollapse" />
        <i-ep-d-arrow-left v-else />
      </el-icon>
    </div>
  </aside>
</template>

<style scoped lang="scss">
.el-menu {
  background-color: transparent;
  border: 0;
}
</style>
