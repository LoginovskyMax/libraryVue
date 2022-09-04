<template>
 <h1>Все пользователи</h1>
    <ModalWindow :TextBtn="'Добавить пользователя'" v-model:show="show">
    <div class="modal-block">
          Имя пользователя<input type="text" v-model="user.name">
          <p v-if="showErorr" class="Error">Имя пользователя не должно бытиь пустым</p>
          Телефон<input type="text" v-model="user.phone">
          <p v-if="showErorr2" class="Error">Напишите телефон пользователя</p>
          <button @click="Save()">Сохранить изменения</button>
      </div>
   </ModalWindow>
<div id="my-app">

  <Slide v-for="user in users" 
        :key="user.id" 
        :userName="user.name" 
        :phone="user.phone"
        :userId="user.id" 
        :user="true"></Slide>
</div>
</template>

<script>
import Slide from '@/components/Myslider.vue'
import ModalWindow from '@/components/ModalWindow.vue'

export default {
  name: 'App',
  data(){
    return{
      show:false,
      showErorr:false,
      showErorr2:false,
      user:{
        id:0,
        name:"",
        phone:"",
        popularity:0
      }
    }
  },
  props:["users"],
  components: {
          Slide,ModalWindow
  },
  methods:{
      Save(){
      if(this.user.name!=""){
        if(this.user.phone!=""){
      this.user.id=Date.now()
      this.$emit("createUser",this.user)
      this.showErorr=false;
      this.showErorr2=false
      this.user={};
      this.show=false;
      }else{this.showErorr2=true}
      }else{this.showErorr=true}
    }
  },
  mounted(){
    
    },
  directives: {
    src:(el,bindings) =>{
      if(bindings.modifiers.random){
        let randomIndex = Math.floor(Math.random()*bindings.value.imgArr.length)
        el.setAttribute("src",bindings.value.imgArr[randomIndex])
      }else{
             el.src = bindings.value.imgArr[0];
             el.setAttribute("src",bindings.value.imgArr[0])
             let i =1
             setInterval(()=>{
             el.setAttribute("src",bindings.value.imgArr[i])
             i++   
         if(i>=bindings.value.imgArr.length){i=0}
     },bindings.value.interval)
      }
    },
  },
  }
</script>

<style lang="less">
body{
  margin: 0;
  padding: 0;
  #my-app{
    display: flex;
    align-items: center;
    gap: 20px;
    margin-top: 20px;
    .modal-block{
         display: flex;
         flex-direction: column;
         gap: 10px;
}
  }
}
@media screen and (max-width:670px){
 #my-app{
   flex-direction: column;
   gap: 5px;
   margin-top: 5px;
  }
}
</style>
