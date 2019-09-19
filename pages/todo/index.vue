<template>
  <div class="wrapper">
    <h1>Todo list</h1>
    <toggle-switch class="switch-delete" @emitToggleSwitch="toggleSwitch">Delete Todos:</toggle-switch>
    <div id="todo-input">
      <h3 for="name">Create todo</h3>
      <todo-item-add
        @emitAddItem="addItem"
        @emitTemporaryInput="saveTemporaryInput"
        :tempInput="tempInput"
      ></todo-item-add>
    </div>
    <div id="todo-list">
      <h2>Todo list:</h2>
      <p style="width:100%;">You have {{ items.length }} todos in your list.</p>
      <todo-items
        :items="items"
        @emitDeleteItem="deleteItem"
        @emitUpdateListOrder="updateListOrder"
        @emitCompleteItem="completeItem"
        v-if="this.items.length > 0"
        :switchState="switchState"
      ></todo-items>
      <p v-if="!containsItems">
        You've done all of your todos!
        <b>Now add some!</b>
      </p>
    </div>
  </div>
</template>

<script>
import todoItems from "../../components/todoItems";
import todoItemAdd from "../../components/todoItemAdd";
import toggleSwitch from "../../components/toggleSwitch";
import Cookies from "../../node_modules/js-cookie/src/js.cookie.js";

export default {
  data() {
    return {
      items: [],
      tempInput: "",
      switchState: false
    };
  },
  mounted() {
    if (Cookies.get("todos")) {
      this.items = Cookies.getJSON("todos");
    }
    this.tempInput = Cookies.getJSON("temporaryInput", this.tempInput);
  },
  updated() {
    Cookies.set("todos", this.items);
  },
  components: {
    todoItems,
    todoItemAdd,
    toggleSwitch
  },
  methods: {
    addItem(input) {
      this.items.push({ name: input });
    },
    deleteItem(item) {
      this.items.splice(this.items.indexOf(item), 1);
    },
    completeItem(item) {
      let index = this.items.indexOf(item);
      if (index > -1) {
        item.completed = !item.completed;
        this.$set(this.items, index, item);
      }
    },
    saveTemporaryInput(input) {
      Cookies.set("temporaryInput", input);
    },
    toggleSwitch(switchState) {
      this.switchState = switchState;
    },
    updateListOrder(mutableList) {
      this.items = mutableList;
    }
  },
  computed: {
    containsItems() {
      if (this.items.length > 0) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style scoped>
body {
  background-color: #35495e;
}
h1 {
  margin-bottom: 1em;
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
#todo-input {
  margin: 0 0 2em 0;
  display: flex;
  flex-flow: column wrap;
  max-width: 50%;
}
#todo-input input,
#todo-input button {
  height: 50px;
  font-size: 1em;
}
#todo-list ul {
  padding: 0;
}
#todo-list p {
  margin: 0.5em 0 0 0;
}
.switch-delete {
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  width: 100%;
  margin: 0 0 1em 0;
}
.switch-delete div {
  float: left;
  clear: both;
  display: block;
  height: 20px;
}
</style>