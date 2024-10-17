import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw = {
  path: 'example',
  meta: {
    label: 'Example',
    icon: IEpHelpFilled,
  },
  children: [
    {
      path: 'q-table',
      name: 'example-q-table',
      component: () => import('@/views/example/q-table/index.vue'),
      meta: {
        label: 'QTable',
      },
    },
  ],
};

export default routes;
