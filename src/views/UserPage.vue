<template>
   <div class="book">
    <p>Страница пользователя </p>
    <ModalWindow :TextBtn="'Изменить пользователя'" v-model:show="show">
      <div class="modal-block">
          Имя<input type="text" v-model="user.name">
          <p v-if="showErorr" class="Error">Имя пользователя не должно бытиь пустым</p>
          Телефон<input type="text" v-model="user.phone">
          <p v-if="showErorr2" class="Error">Напишите телефон пользователя</p>
          <button @click="Save">Сохранить изменения</button>
          <button @click="Delete">Удалить пользователя</button>
      </div>
    </ModalWindow>

     <h2>Имя : {{user.name}}</h2>
     <p>Телефон : {{user.phone}}</p>
     <p>Как часто брал книги : {{user.popularity}}</p>
  </div>
</template>

<script>
import ModalWindow from '@/components/ModalWindow.vue'

export default {
 components:{ModalWindow},
 props:["id","users"],
  data(){
    return{
      show:false,
      showErorr:false,
      showErorr2:false,
      user:{},
      show:false
    }
  },
  methods:{
    Save(){
      if(this.user.name!=""){
        if(this.user.phone!=""){
             this.$emit("changeUser",this.user)
             this.$router.push("/gallery")
             this.showErorr=false;
             this.showErorr2=false
        }else{this.showErorr2=true}
      }else{this.showErorr=true}
     
    },
    Delete(){
      this.$emit("deleteUser",this.id)
      this.$router.push("/gallery")
    }
  },
  mounted(){
    this.users.forEach(element => {
      if(element.id==this.id){
            this.user=element
      }
    });
   
  }
}
</script>

<style>
.modal-block{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.Error{
  background-color: orange;
  border-radius: 10px;
  padding: 5px;
}
</style>