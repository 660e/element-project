import type { RouteRecordRaw } from 'vue-router';

import HelpFilled from '~icons/ep/HelpFilled';

const routes: RouteRecordRaw = {
  path: 'example',
  meta: {
    label: 'Example',
    icon: HelpFilled,
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
