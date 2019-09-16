<template>
  <div class="wrapper">
    <h1>Todo list</h1>
    <div id="todo-input">
      <h3 for="name">Create todo</h3>
      <todo-item-add @emitAddItem="addItem"></todo-item-add>
    </div>
    <div id="todo-list">
      <h2>Todo list:</h2>
      <p>You have {{ items.length }} todos in your list.</p>
      <ul>
        <todo-item :items="items" @emitDeleteItem="deleteItem" v-if="this.items.length > 0"></todo-item>
        <p v-if="!containsItems">You've done all of your todos! <b>Now add some!</b></p>
      </ul>
    </div>
  </div>
</template>

<script>
import todoItem from '../../components/todoItem'
import todoItemAdd from '../../components/todoItemAdd'
import Cookies from '../../node_modules/js-cookie/src/js.cookie.js'

export default {
  data(){
    return {
      items:[],
    }
  },
  mounted(){
    if(Cookies.get('todos')){
      console.log('You have a cookie named todos.')
      this.items = Cookies.getJSON('todos');
    }else{
      console.log("You don't have a cookie named todos.")
    }
  },
  updated(){
    Cookies.set('todos', this.items);
    console.log(Cookies.get('todos', this.items));
  },
  components:{
    todoItem,
    todoItemAdd
  },
  methods:{
    addItem(input){
      this.items.push({name: input});
    },
    deleteItem(item){
      this.items.splice(this.items.indexOf(item), 1);
    }    
  },
  computed:{
    containsItems(){
      if(this.items.length > 0){
        return true;
      }else{
        return false;
      }
    }
  }
};
</script>

<style>
body {
  background-color: #35495e;
}
h1{
  margin-bottom:1em;
  font-size: 3em;
}
.wrapper {
  margin: 0 auto;
  min-height: 100vh;
  max-width: 1000px;
  display: flex;
  flex-flow: column;
  padding: 5%;
  background: #fff;
}
#todo-input{
  margin: 0 0 2em 0;
  display: flex;
  flex-flow: column wrap;
  max-width:50%;
}
#todo-input input, #todo-input button{
  height:50px;
  font-size: 1em;
}
#todo-list ul{
  padding:0;
}
#todo-list p{
  margin:.5em 0 0 0;
}
</style>