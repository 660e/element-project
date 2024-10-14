import { createRouter, createWebHashHistory } from 'vue-router';

export const routes = [
  {
    path: 'home',
    name: 'home',
    component: () => import('@/views/home.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  scrollBehavior: () => ({ top: 0 }),
  routes: [
    {
      path: '/',
      redirect: 'login',
      component: () => import('@/layouts/default/index.vue'),
      children: [...routes],
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/login/index.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/404.vue'),
    },
  ],
});

export default router;
