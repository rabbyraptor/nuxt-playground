<template>
  <ul>
    <li v-for="(item, index) in items" :key="index">
        <span class="name">{{ item.name }}</span>
        <span v-if="switchState" @click="emitDeleteItem(item)" class="remove-item"></span>
      </li>
  </ul>
</template>

<script>
export default{
  data(){
    return {
      
      }
  },
  props:{
    items:{},
    switchState:false
  },
  methods:{
    emitDeleteItem(item){
      this.$emit("emitDeleteItem", item);
      console.log('Item ' + item.name + ' was deleted');
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
    display: flex;
    align-items: center;
    justify-content: space-between;
    border:1px solid #cecece;
  }
  .name{
    padding: 3px 0;
  }
  .remove-item{
    background-color:lightcoral;
    padding: 3px 8px;
    color:#fff;
  }
  .remove-item::before{
    content: 'x';
  }
   .remove-item:hover{
     cursor:pointer;
   }
</style>