<script setup lang="ts">
import { useConfigProviderStore } from '@/stores/modules/config-provider';
import { ESize } from '@/stores/modules/config-provider';
import SetUp from '~icons/ep/SetUp';

const visible = ref(false);
const onVisibleChange = (val: boolean) => (visible.value = val);

const configProviderStore = useConfigProviderStore();
const handleCommand = (command: ESize) => (configProviderStore.size = command);
const sizeOptions = Object.keys(ESize).map((key) => {
  return { command: ESize[key as keyof typeof ESize], label: key };
});
</script>

<template>
  <el-tooltip :disabled="visible" content="Size">
    <el-dropdown trigger="click" @command="handleCommand" @visible-change="onVisibleChange">
      <el-button :icon="SetUp" circle text />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="item in sizeOptions" :key="item.command" :command="item.command">{{ item.label }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </el-tooltip>
</template>
