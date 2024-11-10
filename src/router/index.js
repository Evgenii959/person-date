import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import PreviewPage from '../views/PreviewPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/preview',
    name: 'preview',
    component: PreviewPage,
  },
];

const router = createRouter({
  history: createWebHistory('/person-date'),
  routes,
});

export default router;
