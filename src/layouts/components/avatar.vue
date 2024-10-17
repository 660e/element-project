<script setup lang="ts">
import { useConfigProviderStore } from '@/stores';
import { ESizeNumber } from '@/stores/modules/config-provider';
import SwitchButton from '~icons/ep/SwitchButton';

const configProviderStore = useConfigProviderStore();

const router = useRouter();
const handleCommand = (command: string) => {
  switch (command) {
    case 'logout':
      router.push({ name: 'login' });
      break;
  }
};
</script>

<template>
  <div class="flex items-center space-x-2">
    <div>Admin</div>
    <el-dropdown @command="handleCommand" trigger="click">
      <el-avatar :size="ESizeNumber[configProviderStore.size]" fit="cover" src="https://avatars.githubusercontent.com/u/28943787" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :icon="SwitchButton" command="logout">Log out</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
