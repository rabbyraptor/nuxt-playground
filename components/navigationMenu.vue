<template>
  <nav>
    <nuxt-link v-for="page in pages" :to="page.link" :key="page.name">{{ page.name }}</nuxt-link>
  </nav>
</template>

<script>
export default{
  data(){
    return {
      pages:[
        {name: "Home", link: "/"}, 
        {name: "Todo", link: "/todo"}, 
        {name: "Blog", link: "/blog"},
        {name: "Firebase", link: "/firebase"},
        {name: "Kontakt", link: "/kontakt"}
      ]
    }
  }
}
</script>

<style scoped>
nav{
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
  margin:0;
  display:block;
}
a:hover{
  background-color: #35495e;
  color:#fff;
}
</style>