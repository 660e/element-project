<script setup lang="ts">
import { useConfigProviderStore } from '@/stores';
import { ESizeNumber } from '@/stores/modules/config-provider';

const configProviderStore = useConfigProviderStore();

const router = useRouter();
const commands = [{ label: 'Log out', value: 'logout', icon: IEpSwitchButton }];
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
    <el-dropdown trigger="click" @command="handleCommand">
      <el-avatar :size="ESizeNumber[configProviderStore.size]" fit="cover" src="https://avatars.githubusercontent.com/u/28943787" />
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item v-for="command in commands" :key="command.value" :command="command.value" :icon="command.icon">
            {{ command.label }}
          </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>
