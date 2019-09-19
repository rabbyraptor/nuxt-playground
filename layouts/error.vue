<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/">Go back to Home</nuxt-link>
    <img src="~/assets/img/fogg-page-not-found-1.png" />
  </div>
</template>

<script>
export default {
  props: ["error"]
  //layout: 'default'
};
</script>

<style scoped>
h1 {
  margin: 2em 0 0 0;
}
</style>