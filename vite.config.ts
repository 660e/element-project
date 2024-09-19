import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/unplugin/unplugin-auto-import
    AutoImport({
      dts: './src/auto-imports.d.ts',
      imports: ['vue', 'vue-router'],
      resolvers: [ElementPlusResolver()],
    }),

    // https://github.com/unplugin/unplugin-vue-components
    Components({
      dts: './src/components.d.ts',
      resolvers: [ElementPlusResolver()],
    }),

    vue(),
    vueJsx(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 2024,
  },
});
