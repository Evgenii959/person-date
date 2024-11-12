import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../pages/MainPage.vue';
import PreviewPage from '../pages/PreviewPage.vue';
import NotFound from '../pages/404.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: MainPage,
  },
  {
    path: '/preview',
    name: 'preview',
    component: PreviewPage,
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'notFound',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory('/person-date/'),
  routes,
});

export default router;
