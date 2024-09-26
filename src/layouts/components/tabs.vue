<script setup lang="ts">
import type { TabPaneName } from 'element-plus';

const active = ref('Tab 1');
const tabs = ref(['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4']);
const tabRemove = (name: TabPaneName) => {
  console.log(name);
};
</script>

<template>
  <div class="app-tabs">
    <el-tabs v-model="active" @tab-remove="tabRemove" type="border-card" closable>
      <el-tab-pane v-for="tab in tabs" :key="tab" :label="tab" :name="tab" />
    </el-tabs>
  </div>
</template>

<style lang="scss">
.app-tabs > .el-tabs {
  background-color: transparent;
  border: 0;
  .el-tabs__header {
    background-color: transparent;
    .el-tabs__item {
      line-height: 1;
      &.is-active {
        background-color: theme('colors.neutral.100');
      }
    }
  }
  .el-tabs__content {
    display: none;
  }
}
.dark .app-tabs > .el-tabs > .el-tabs__header .el-tabs__item.is-active {
  background-color: theme('colors.black');
}
</style>
