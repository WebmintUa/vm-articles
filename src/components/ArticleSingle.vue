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
export default {
  name: 'ArticleSingle',
  data() {
    return {
      post: null,
    };
  },
  watch: {
    // call again the method if the route changes
    $route: () => {
      this.$axios.fetchPost(this.$route.params.id)
        .then(({ data }) => {
          this.post = data;
        });
    },
  },
  created() {
    this.$axios.fetchPost(this.$route.params.id)
      .then(({ data }) => {
        this.post = data;
      });
  },
};
</script>

<style scoped>

</style>
