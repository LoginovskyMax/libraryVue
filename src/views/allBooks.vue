<template>
  <div class="home">
   
    <h1>All books</h1>
    <ModalWindow :TextBtn="'Добавить книгу'" v-model:show="show"> 
      <div class="modal-block">
          Название<input type="text" v-model="book.name">
          Автор<input type="text" v-model="book.author">
          Страницы<input type="number" v-model="book.pages">
          Количество<input type="number" v-model="book.items">
          <p v-if="error">Заполните все поля</p>
          <button @click="Save()">Сохранить изменения</button>
      </div>
    </ModalWindow>
    <div class="books">
    <transition-group name="list" appear>
    <Slide v-for="book in books" :key="book.id" 
                                   :name="book.name" 
                                   :author="book.author"
                                   :id = "book.id" 
                                   class="blocks"
                                   />
    </transition-group>

    </div>
  </div>
</template>

<script>

import Slide from '@/components/Myslider.vue'
import ModalWindow from '@/components/ModalWindow.vue'

export default {
  name: 'HomeView',
  props:["books"],
  components: {
          Slide, ModalWindow
  },
  data(){
    return{
      show:false,
      error:false,
      book:{
        id:0,
        name:"",
        author:"",
        items:"",
        pages:"",
        popularity:0
      }
    }
  },
  methods:{
    Save(){
      if(this.book.name!=''&&this.book.author!=''&&this.book.items!=''&&this.book.pages!=''){
            this.book.id=Date.now()
            this.$emit("createBook",this.book)
            this.book={};
            this.error=false;
            this.show=false
      }else{this.error=true;
      setTimeout(()=>{this.error=false},1000)
      }
     
    }
  }
}
</script>
<style lang="less">
.books{
  display: flex;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
}
.modal-block{
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.blocks{
      margin-bottom: 10px;
      transition: all 0.8s;
 }
.list-enter, .list-leave-to
{
  opacity: 0;
  transform: translateX(40px);
}
.list-move {
  transition: transform 1s;
}
@media screen and (max-width:670px){
 .books{
   flex-direction: column;
   align-items: center;
   gap: 5px;
   margin-top: 5px;
  }
}
</style>
