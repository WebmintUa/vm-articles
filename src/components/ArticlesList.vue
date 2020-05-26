<template>
<section>
  <v-list>
    <v-card
      v-for="(p, i) in posts"
      :key="i"
    >
      <v-list-item
        :to="{ name: 'article-single', params: { id: p.id }}"
      >
        <v-list-item-content>
          <v-list-item-title>{{ p.title }}</v-list-item-title>
          <v-list-item-subtitle>{{ p.body }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </v-list>
</section>
</template>

<script>
export default {
  name: 'ArticlesList',
  data() {
    return {
      posts: [],
    };
  },
  created() {
    this.$axios.fetchPosts()
      .then(({ data }) => {
        this.posts = data;
      });
  },
};
</script>

<style scoped>

</style>
