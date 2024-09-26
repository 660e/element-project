<script setup lang="ts">
import { useConfigProviderStore } from '@/stores/modules/config-provider';
import { Size } from '@/stores/modules/config-provider';
import SetUp from '~icons/ep/SetUp';

const visible = ref(false);
const onVisibleChange = (val: boolean) => (visible.value = val);

const configProviderStore = useConfigProviderStore();
const handleCommand = (command: Size) => (configProviderStore.size = command);
const sizeOptions = Object.keys(Size).map((key) => {
  return { command: Size[key as keyof typeof Size], label: key };
});
</script>

<template>
  <el-tooltip :disabled="visible" content="Size">
    <el-dropdown @command="handleCommand" @visible-change="onVisibleChange" trigger="click">
      <el-button :icon="SetUp" circle text></el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="item in sizeOptions" :key="item.command" :command="item.command">{{ item.label }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-tooltip>
</template>
