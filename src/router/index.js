import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/articles',
    name: 'articles-list',
    component: () => import('@/components/ArticlesList'),
  },
  {
    path: '/articles/:id',
    name: 'article-single',
    component: () => import('@/components/ArticleSingle'),
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
