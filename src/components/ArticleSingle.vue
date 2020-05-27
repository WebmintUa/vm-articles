<template>
<v-card>
  <v-card-title v-if="post && post.title">
    {{ post.title }}
  </v-card-title>
  <v-card-text v-if="post && post.body">
    {{ post.body }}
  </v-card-text>
</v-card>
</template>

<script>
import fetchMixin from '@/mixins/fetchMixin';

export default {
  name: 'ArticleSingle',
  mixins: [fetchMixin],
  data() {
    return {
      post: null,
    };
  },
  watch: {
    $route: () => {
      this.$articlesAxios.fetchPost(this.$route.params.id)
        .then(({ data }) => {
          this.post = data;
        });
    },
  },
  created() {
    this.$articlesAxios.fetchPost(this.$route.params.id)
      .then(({ data }) => {
        this.post = data;
      });
  },
};
</script>

<style scoped>

</style>
