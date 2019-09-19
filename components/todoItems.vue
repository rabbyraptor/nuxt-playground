<template>
  <ul>
    <draggable v-model="mutableList" @start="drag=true" @end="emitUpdateListOrder">
      <li v-for="item in mutableList" :key="item.name" :class="{'is-completed':item.completed}">
        <div>
          <span @click="emitCompleteItem(item)" class="complete-item"></span>
          <span class="todo-name">{{ item.name }}</span>
        </div>
        <span v-if="switchState" @click="emitDeleteItem(item)" class="remove-item"></span>
      </li>
    </draggable>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      mutableList: this.items
    };
  },
  props: {
    items: {},
    switchState: false
  },
  methods: {
    emitDeleteItem(item) {
      this.$emit("emitDeleteItem", item);
      console.log("Item " + item.name + " was deleted");
    },
    emitUpdateListOrder() {
      this.drag = false;
      this.$emit("emitUpdateListOrder", this.mutableList);
    },
    emitCompleteItem(item) {
      this.$emit("emitCompleteItem", item);
    }
  }
};
</script>

<style scoped>
li {
  background-color: #efefef;
  padding: 1em 2em;
  box-sizing: border-box;
  margin: 1em 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  justify-items: start;
  border: 1px solid #cecece;
  cursor: move;
  cursor: grab;
}
li:active {
  cursor: grabbing;
}
li > div {
  display: flex;
}
.todo-name {
  padding: 3px 0;
  float: left;
}
.complete-item {
  background-color: #fff;
  padding: 3px 6px;
  color: #ccc;
  float: left;
  margin-right: 2em;
}
.complete-item::before {
  content: "\2714";
  display: inline;
}
.complete-item:hover {
  cursor: pointer;
  color: #777;
}
.is-completed {
  background-color: lightgreen;
}
.is-completed .todo-name {
  text-decoration: line-through;
  color: #aaa;
}
.is-completed .complete-item {
  color: green;
}
.remove-item {
  background-color: lightcoral;
  padding: 3px 8px;
  color: #fff;
  justify-self: end;
}
.remove-item::before {
  content: "x";
}
.remove-item:hover {
  cursor: pointer;
}
</style>