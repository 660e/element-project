<script setup lang="ts">
import { useConfigProviderStore } from '@/stores/modules/config-provider';
import { Size } from '@/stores/modules/config-provider';

const visible = ref(false);
const configProviderStore = useConfigProviderStore();
const sizeOptions = Object.keys(Size).map((key) => {
  return { command: Size[key as keyof typeof Size], label: key };
});
</script>

<template>
  <el-tooltip :disabled="visible" content="Size">
    <el-dropdown @command="(command: Size) => (configProviderStore.size = command)" @visible-change="(val) => (visible = val)" trigger="click">
      <el-button circle></el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="item in sizeOptions" :key="item.command" :command="item.command">{{ item.label }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-tooltip>
</template>
