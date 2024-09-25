import { defineStore } from 'pinia';

export enum Size {
  Large = 'large',
  Default = 'default',
  Small = 'small',
}

export const useConfigProviderStore = defineStore('config-provider', () => {
  const size = ref<Size>(Size.Default);

  return { size };
});
