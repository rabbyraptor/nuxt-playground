<template>
  <div>
    <li v-for="(item, index) in items" :key="index">{{ item.name }}<span @click="emitDeleteItem(item)" class="remove-item">X</span></li>
  </div>
</template>

<script>
export default{
  data(){
    return {
      
      }
  },
  props:{
    items:{},
  },
  methods:{
    emitDeleteItem(item){
      this.$emit("emitDeleteItem", item);
      console.log('Item ' + item.name + ' was deleted');
    }
  }
}
</script>

<style>
  li{
    background-color:#efefef;
    padding:1em 2em;
    box-sizing: border-box;
    margin:1em 0;
  }
  .remove-item{
    display: block;
    float: right;
    background-color:lightcoral;
    padding:.2em .5em;
    color:#fff;
  }
   .remove-item:hover{
     cursor:pointer;
   }
</style>