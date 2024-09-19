<script setup lang="ts">
import AppHeader from './components/header.vue';
import AppAside from './components/aside.vue';
import AppFooter from './components/footer.vue';
</script>

<template>
  <div class="h-screen flex flex-col">
    <app-header />
    <app-aside />
    <main>
      <router-view />
    </main>
    <app-footer />
  </div>
</template>
