<script setup lang="ts">
import AppHeader from './header.vue';
import AppAside from './aside.vue';
import AppTabs from './tabs.vue';
import AppFooter from './footer.vue';
</script>

<template>
  <div class="h-screen overflow-hidden flex flex-col">
    <app-header />
    <div class="flex-1 overflow-auto flex">
      <app-aside />
      <div class="flex-1 flex flex-col">
        <app-tabs />
        <main class="flex-1 overflow-auto p-2 bg-neutral-100 dark:bg-black">
          <router-view />
        </main>
        <app-footer />
      </div>
    </div>
  </div>
</template>
