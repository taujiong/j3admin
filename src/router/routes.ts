import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ name: 'home', path: '', component: () => import('pages/Index.vue') }]
  },

  {
    path: '/oidc',
    component: () => import('layouts/EmptyLayout.vue'),
    children: [{ name: 'signin', path: 'signin', component: () => import('pages/Oidc/SignIn.vue') }]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
];

export default routes;
