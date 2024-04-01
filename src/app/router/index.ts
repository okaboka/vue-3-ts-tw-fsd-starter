import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from 'vue-router';
import MainPage from '@/pages/MainPage.vue';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'main',
    component: MainPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
