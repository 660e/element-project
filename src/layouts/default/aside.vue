<script setup lang="tsx">
import type { RouteRecordRaw } from 'vue-router';
import { routes as routesRaw } from '@/router';

const isCollapse = ref(false);

const renderItem = (routes: RouteRecordRaw[], parentIndex = '') => {
  return routes.map((route, index) => {
    const currentIndex = parentIndex ? `${parentIndex}-${index + 1}` : String(index + 1);
    if (route.children?.length) {
      return (
        <el-sub-menu index={currentIndex}>
          {{
            title: () => {
              return (
                <>
                  <el-icon>
                    <i-ep-menu />
                  </el-icon>
                  <span>
                    {currentIndex} {route.meta?.label}
                  </span>
                </>
              );
            },
            default: () => renderItem(route.children || [], currentIndex),
          }}
        </el-sub-menu>
      );
    } else {
      return (
        <el-menu-item index={currentIndex}>
          <el-icon>
            <i-ep-menu />
          </el-icon>
          <span>
            {currentIndex} {route.meta?.label}
          </span>
        </el-menu-item>
      );
    }
  });
};
const renderMenu = (props: { routes: RouteRecordRaw[] }) => {
  return (
    <el-menu collapse={isCollapse.value} class="w-60">
      {renderItem(props.routes)}
    </el-menu>
  );
};
</script>

<template>
  <aside class="flex flex-col border-r border-neutral-200 dark:border-neutral-800">
    <el-scrollbar class="flex-1">
      <render-menu :routes="routesRaw" />
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
