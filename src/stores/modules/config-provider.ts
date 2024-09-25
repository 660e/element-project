import { defineStore } from 'pinia';

export type Size = 'large' | 'default' | 'small';

export const useConfigProviderStore = defineStore('config-provider', () => {
  const size = ref<Size>('default');

  return { size };
});
