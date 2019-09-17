<template>
  <div class="container">
    <h1 class="title">Here be no dragons!</h1>
  </div>
</template>

<style> 
body{
  background-color: #35495e;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  max-width:1000px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  padding:0 5%;
  background: #fff;
}
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 90px;
  color: #35495e;
  letter-spacing: 1px;
  width:100%;
  line-height: .9em;
  text-align:center;
}
.author{
  font-weight:normal;
  text-align: center;
  padding:1em 0;
}
.container img{
  width:100%;
  height:auto;
  margin-top:1em;
}
ul.blogPostList{
  padding:0;
}
ul.blogPostList li{
  margin-top:128px;
}
ul.blogPostList li:first-child{
  margin-top:64px;
}
.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
 </style> 

<script>
import { createClient } from "~/plugins/contentful.js";
const client = createClient();

export default {
  // `env` is available in the context object
  asyncData({ env }) {
    return Promise.all([
      // fetch the owner of the blog
      client.getEntries({
        "sys.id": env.CTF_PERSON_ID
      }), // fetch all blog posts sorted by creation date
      client.getEntries({
        content_type: "blogPost",
        order: "-sys.createdAt"
      })
    ])
      .then(([entries, posts]) => {
        // return data that should be available
        // in the template
        return {
          person: entries.items[0],
          posts: posts.items
        };
      })
      .catch(console.error);
  }

};


/* ,
  methods:{
    createTodo(data){
    return fetch('/.netlify/functions/todos-create', {
        body: JSON.stringify(data),
        method: 'POST'
      }).then(response => {
        return response.json()
      })
    }
  },
  data() {
    return{
    title: 'My todo title',
    completed: false,
    }
  }
 */
</script>



