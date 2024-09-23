<script setup lang="ts">
import type { TabPaneName } from 'element-plus';

const active = ref('Tab 1');
const tabs = ref(['Tab 1', 'Tab 2', 'Tab 3', 'Tab 4']);
const removeTab = (name: TabPaneName) => {
  console.log(name);
};
</script>

<template>
  <div>
    <el-tabs v-model="active" @tab-remove="removeTab" type="border-card" closable>
      <el-tab-pane v-for="tab in tabs" :key="tab" :label="tab" :name="tab" />
    </el-tabs>
  </div>
</template>

<style lang="scss" scoped>
.el-tabs {
  border: 0;
  ::v-deep(.el-tabs__header .el-tabs__item) {
    line-height: 1;
  }
  ::v-deep(.el-tabs__content) {
    display: none;
  }
}
</style>
