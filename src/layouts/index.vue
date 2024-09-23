<script setup lang="ts">
import AppHeader from './components/header.vue';
import AppAside from './components/aside.vue';
import AppTabs from './components/tabs.vue';
import AppFooter from './components/footer.vue';
</script>

<template>
  <div class="h-screen overflow-hidden flex flex-col">
    <app-header />
    <div class="flex-1 overflow-auto flex">
      <app-aside />
      <div class="flex-1 flex flex-col">
        <app-tabs />
        <main class="flex-1 p-4 bg-neutral-100 dark:bg-black">
          <router-view />
        </main>
        <app-footer />
      </div>
    </div>
  </div>
</template>
