<script setup lang="ts">
import imgSrc from '@/assets/tg-silence1e9c5d.jpg';
import { getAssetUrl } from '@/utils';

const icons = [IEpMenu, IEpMenu, IEpMenu];
</script>

<template>
  <q-page>
    <div class="h-full p-2 space-y-2">
      <div class="flex">
        <img src="@/assets/tg-silence1e9c5d.jpg" />
        <img :src="imgSrc" />
        <img :src="getAssetUrl('tg-silence1e9c5d.jpg')" />
      </div>
      <div class="flex space-x-2">
        <i-ep-menu />
        <IEpMenu />
        <component :is="icon" v-for="(icon, index) in icons" :key="index" />
      </div>
    </div>
  </q-page>
</template>
