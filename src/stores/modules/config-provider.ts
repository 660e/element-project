import { defineStore } from 'pinia';

export enum ESize {
  Large = 'large',
  Default = 'default',
  Small = 'small',
}

export enum ESizeNumber {
  large = 40,
  default = 32,
  small = 24,
}

export const useConfigProviderStore = defineStore('config-provider', () => {
  const size = ref<ESize>(ESize.Default);

  return { size };
});
