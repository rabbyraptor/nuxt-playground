<template>
  <ul>
    <nuxt-link v-for="page in pages" :to="page.link">{{ page.name }}</nuxt-link>
  </ul>
</template>

<script>
export default{
  data(){
    return {
        pages:[{name: "Home", link: "/"}, {name: "Todo", link: "/todo"}, {name: "Kontakt", link: "/kontakt"}, {name: "Blog", link: "/blog"}]
      }
  }
}
</script>

<style scoped>
ul{
  padding:0;
  display: flex;
  justify-content: center;
  width:100%;
  background-color:#fff;
  margin-bottom:2em;
}
a{
  background-color:#fff;
  padding:1em 2em;
  box-sizing: border-box;
  margin:1em 0;
  display:block;
}
a:hover{
  background-color: #35495e;
  color:#fff;
}
</style>