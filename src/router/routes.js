import ArticlesList from '@/components/ArticlesList.vue';
import ArticleSingle from '@/components/ArticleSingle.vue';


export default [{
  path: '/articles',
  name: 'articles-list',
  component: ArticlesList,
},
{
  path: '/articles/:id',
  name: 'article-single',
  component: ArticleSingle,
}];
