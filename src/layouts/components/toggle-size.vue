<script setup lang="ts">
const handleCommand = (command: string) => {
  console.log(command);
};
const visible = ref(false);
</script>

<template>
  <el-tooltip :disabled="visible" content="Size">
    <el-dropdown @command="handleCommand" @visible-change="(val) => (visible = val)" trigger="click">
      <el-button circle></el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="a">Action 1</el-dropdown-item>
          <el-dropdown-item command="b">Action 2</el-dropdown-item>
          <el-dropdown-item command="c">Action 3</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-tooltip>
</template>
