import { createRouter, createWebHashHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';

import exampleRoutes from './modules/example';

export const routes: RouteRecordRaw[] = [
  {
    path: 'home',
    name: 'home',
    component: () => import('@/views/home.vue'),
  },
  exampleRoutes,
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
