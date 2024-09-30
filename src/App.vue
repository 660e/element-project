<script setup lang="ts">
import { useConfigProviderStore } from '@/stores';

const configProviderStore = useConfigProviderStore();
</script>

<template>
  <el-config-provider :size="configProviderStore.size">
    <router-view />
  </el-config-provider>
</template>
