import { createRouter, createWebHashHistory } from 'vue-router';

export default createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: 'home',
    },
    {
      path: '/',
      component: () => import('@/layouts/index.vue'),
      children: [
        {
          path: 'home',
          name: 'home',
          component: () => import('@/views/home.vue'),
        },
      ],
    },
  ],
});
