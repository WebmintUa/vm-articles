import ArticlesList from './components/ArticlesList.vue';
import ArticleSingle from './components/ArticleSingle.vue';
import router from './router';
import axios from './plugins/axios';

export default {
  install(Vue, options) {
    if (!options || !options.router) {
      throw new Error('Please initialise plugin with a Vue router.');
    }

    if (!options || !options.axios) {
      throw new Error('Please initialise plugin with a Axios.');
    }

    options.router.registerModule('vmArticles', router);
    options.axios.registerModule('vmArticles', axios);

    Vue.component('ArticlesList', ArticlesList);
    Vue.component('ArticleSingle', ArticleSingle);
  },
};
