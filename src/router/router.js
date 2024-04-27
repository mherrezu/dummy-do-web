import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '', component: () => import('@/pages/Home.vue') },
    { path: '/about', component: () => import('@/pages/About.vue') },
    { path: '/frontend', component: () => import('@/pages/Frontend.vue') },
    { path: '/backend', component: () => import('@/pages/Backend.vue') },
  ]
});

export default router;