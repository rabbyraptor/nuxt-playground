<template>
  <div class="wrapper">
    <h1>Todo list</h1>
    <div id="todo-input">
      <h3 for="name">Create todo</h3>
      <todo-item-add @emitAddItem="addItem"></todo-item-add>
    </div>
    <div id="todo-list">
      <h2>Todo list:</h2>
      <ul>
        <todo-item :items="items" @emitDeleteItem="deleteItem" v-if="this.items.length > 0"></todo-item>
        <p v-if="this.items.length <= 0">You've done all of your todos! Nice! :)</p>
      </ul>
    </div>
  </div>
</template>

<script>
import todoItem from '../../components/todoItem'
import todoItemAdd from '../../components/todoItemAdd'

export default {
  data() {
    return {
      items:[
      {name: 'Buy apples'},
      {name: 'Eat apples'},
      {name: 'Get a haircut'}
      ],
    }
  },
  components:
  {
    todoItem,
    todoItemAdd
  },

  methods:{
    addItem(input){
      this.items.push({name: input});
    },
    deleteItem(item){
      console.log(this.items.indexOf(item));
      this.items.splice(this.items.indexOf(item), 1);
    }
  },
  computed:{
    
  }
};
</script>

<style scope>
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
  padding: 0 5%;
  background: #fff;
  padding-top:10%;
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
</style>