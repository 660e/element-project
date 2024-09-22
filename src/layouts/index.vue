<script setup lang="ts">
import AppHeader from './components/header.vue';
import AppAside from './components/aside.vue';
import AppFooter from './components/footer.vue';
</script>

<template>
  <div class="h-screen overflow-hidden flex flex-col">
    <app-header />
    <div class="flex-1 h-full flex">
      <app-aside />
      <div class="flex-1">
        <main>
          <router-view />
        </main>
        <app-footer />
      </div>
    </div>
  </div>
</template>
