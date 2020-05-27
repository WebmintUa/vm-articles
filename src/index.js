import ArticlesList from './components/ArticlesList.vue';
import ArticleSingle from './components/ArticleSingle.vue';
import routes from './router/routes';

export default {
  install(Vue, options) {
    if (!options || !options.router) {
      throw new Error('Please initialise plugin with a Vue router.');
    }
    options.router.addRoutes(routes);

    Vue.component('ArticlesList', ArticlesList);
    Vue.component('ArticleSingle', ArticleSingle);
  },
  routes,
};
