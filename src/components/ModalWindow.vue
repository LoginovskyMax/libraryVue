<template>
 <button @click="openModal" class="btn">{{TextBtn}}</button>
    <transition name="fade">
    <div class="modalWindow" v-if="show"  v-on:click.stop="closeModal">
      <div class="modalItem" @click.stop>
        <slot></slot>
      </div>
    </div>
    </transition>
</template>

<script>
export default {
name:["ModalWindow"],
props:["TextBtn","show"],
data(){
    return{
       
    }
},
methods:{
    openModal(){
      this.$emit("update:show",true)
    },
    closeModal(){
      this.$emit("update:show",false)
    }
}
}
</script>

<style>
.modalWindow{
  position: fixed;
  top:0;
  bottom:0;
  right:0;
  left:0;
  background-color: rgba(0, 255, 255, 0.253);
  display: flex;
  justify-content: center;
  align-items: center;
}
.modalItem{
  width: 300px;
  border-radius: 20px;
  padding: 30px;
  background-color: aqua;
  
}
.btn{
  margin-bottom: 20px;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.7s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}
</style>