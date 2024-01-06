import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/produits', component: () => import('pages/ProduitsPage.vue') },
      { path: '/apps', component: () => import('pages/AppsPage.vue') },
      { path: '/blogs', component: () => import('pages/BlogsPage.vue') },
      { path: '/prix', component: () => import('pages/PrixPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
