<template>
  <div>
    <input v-model="input" type="text" placeholder="Add a todo item" required />
    <button type="submit" @click="emitAddItem()">
      <span>Create todo</span>
    </button>
  </div>
</template>

<script>
export default{
  data(){
    return {
      input:''
    }
  },
  props:{
    items:{}
  },
  methods:{
    emitAddItem(){
      if(this.input != ''){
        this.$emit("emitAddItem", this.input);
        console.log('Input ' + this.input + ' was emitted');
        this.input = '';
      }
    }
  }
  
}
</script>

<style scoped>
  li{
    background-color:#efefef;
    padding:1em 2em;
    box-sizing: border-box;
    margin:1em 0;
  }
</style>