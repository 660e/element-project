<script setup lang="ts">
import { routes } from '@/router';

const isCollapse = ref(false);

console.log(routes);
</script>

<template>
  <aside class="flex flex-col border-r border-neutral-200 dark:border-neutral-800">
    <el-scrollbar class="flex-1">
      <el-menu :collapse="isCollapse" class="w-60">
        <template v-for="(route, index) in routes" :key="index">
          <el-sub-menu v-if="route.children?.length" :index="String(index)">
            <template #title>
              <el-icon><i-ep-menu /></el-icon>
              <span>{{ route.meta?.label }}</span>
            </template>
            <el-menu-item v-for="(r, i) in route.children" :key="i" :index="String(i)">
              <el-icon><i-ep-menu /></el-icon>
              <span>{{ r.meta?.label }}</span>
            </el-menu-item>
          </el-sub-menu>
          <el-menu-item v-else :index="String(index)">
            <el-icon><i-ep-menu /></el-icon>
            <span>{{ route.meta?.label }}</span>
          </el-menu-item>
        </template>
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
