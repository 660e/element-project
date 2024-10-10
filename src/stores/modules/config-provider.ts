import { defineStore } from 'pinia';

export enum ESize {
  Large = 'large',
  Default = 'default',
  Small = 'small',
}

export const useConfigProviderStore = defineStore('config-provider', () => {
  const size = ref<ESize>(ESize.Default);

  return { size };
});
