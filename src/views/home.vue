<script setup lang="ts">
import imgSrc from '@/assets/tg-silence1e9c5d.jpg';
import { getAssetUrl } from '@/utils';
</script>

<template>
  <q-page>
    <div class="h-full p-2">
      <div class="flex">
        <img src="@/assets/tg-silence1e9c5d.jpg" />
        <img :src="imgSrc" />
        <img :src="getAssetUrl('tg-silence1e9c5d.jpg')" />
      </div>
    </div>
  </q-page>
</template>
