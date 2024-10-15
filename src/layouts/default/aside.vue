<script setup lang="tsx">
import type { RouteRecordRaw } from 'vue-router';
import { routes } from '@/router';

const isCollapse = ref(false);

const renderMenu = (props: { routes: RouteRecordRaw[] }) => {
  return (
    <el-menu collapse={isCollapse.value} class="w-60">
      {props.routes.map((route, index) => {
        if (route.children?.length) {
          return (
            <el-sub-menu index={String(index)}>
              {{
                title: () => {
                  return (
                    <>
                      <el-icon>
                        <i-ep-menu />
                      </el-icon>
                      <span>{route.meta?.label}</span>
                    </>
                  );
                },
                default: () => {
                  return route.children?.map((r, i) => {
                    return (
                      <el-menu-item index={String(i)}>
                        <el-icon>
                          <i-ep-menu />
                        </el-icon>
                        <span>{r.meta?.label}</span>
                      </el-menu-item>
                    );
                  });
                },
              }}
            </el-sub-menu>
          );
        } else {
          return (
            <el-menu-item index={String(index)}>
              <el-icon>
                <i-ep-menu />
              </el-icon>
              <span>{route.meta?.label}</span>
            </el-menu-item>
          );
        }
      })}
    </el-menu>
  );
};
</script>

<template>
  <aside class="flex flex-col border-r border-neutral-200 dark:border-neutral-800">
    <el-scrollbar class="flex-1">
      <render-menu :routes="routes" />
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
