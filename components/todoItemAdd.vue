<template>
  <div>
    <input v-model="input" @keyup.enter="emitAddItem()" @keyup="emitTemporaryInput()" type="text" placeholder="Add a todo item" required />
    <button @click="emitAddItem()" :disabled="submitDisabled">
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
  mounted(){
    this.input = this.tempInput;
  },
  watch:{    
    tempInput(){
      this.input = this.tempInput;
    }
  },
  methods:{
    emitAddItem(){
      if(this.input != ''){
        this.$emit("emitAddItem", this.input);
        console.log('Input ' + this.input + ' was emitted');
        this.input = '';
        this.$emit("emitTemporaryInput", this.input);
      }
    },
    emitTemporaryInput(){
      this.$emit("emitTemporaryInput", this.input);
    }
  },
  props:{
    tempInput:''
  },
  computed:{
    submitDisabled(){
      if(this.input != ""){
        return false;
      }else{
        return true;
      }
    }
  }
}
</script>

<style scoped>
  input{
    padding:.5em;
    box-sizing: border-box;
    margin:1em 0;
    font-size: 16px;
  }
  input:hover{
    cursor:initial;
  }
  button{
    padding:.4em;
    font-size:16px;
    margin:1px 0 0 0;
  }
  button:hover{
    cursor:pointer;
  }
</style>