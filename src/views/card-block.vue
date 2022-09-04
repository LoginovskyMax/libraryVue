<template>
  <div class="Cards">
      <div class="header_text">
        <p>Пользователь</p>
        <p>Книга</p>
        <p class="header_date">Дата получения</p>
        <p class="header_date">Дата возвращения</p>
        <p class="header_date">Удалить</p>
      </div>
      <ModalWindow :TextBtn="'Добавить карту-пользователя'" v-model:show=show >
          <div class="modal-block">
          Имя пользователя<select v-model="user"><option v-for="user in users" :key="user.id">{{user.name}}</option></select>
          <p v-if="error">Укажите пользователя</p>
          Название книги<select  v-model="book"><option v-for="book in booksArr" :key="book.id">{{book.name}}</option></select> 
          <p v-if="error2">Укажите книгу</p>
          <button @click="Save()">Добавить</button>
      </div>
      </ModalWindow>
      <div v-for="card in cards" :key="card.id" class="header">
        <p>{{card.userName}}</p>
        <p>{{card.book}}</p>
        <p class="header_date">{{card.addDate}}</p>
        <p class="header_date" v-if="card.returnDate!=''">{{card.returnDate}}</p>
        <p class="header_date" v-else><button type="button" @click="returnBook(card.id,card.book)">Возврат книги</button></p>
        <p class="header_date" ><button type="button" @click="deleteCard(card.id)">X</button></p>
      </div>

  </div>
</template>
<script>
import ModalWindow from '@/components/ModalWindow.vue'

export default {
  props:["books",'users','cards'],
  components: {ModalWindow},
  data() {
    return{
        user:'',
        book:'',
        show:false,
        error:false,
        error2:false
    }
  },
  methods:{
    deleteCard(id){
        this.$emit("deleteCard",id);
    },
    returnBook(id,book){
      this.$emit("returnBook",id,book);
    },
    Save(){
      if(this.user!=""){
        if(this.book!=""){
        let date = new Date()
        let obj = {
        id:Date.now(),
        userName:this.user,
        book:this.book,
        addDate:date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear(),
        returnDate:''
      };
      this.$emit("addCard",obj)
      this.user=""
      this.book=''
      this.show=false;
      this.error=false;
      this.error2=false
        }else{this.error2=true}
      }else{this.error=true}
      
    }
  },
  computed:{
    booksArr(){
      let arr = this.books.filter(book=>book.items>0);
      return arr
    }
  }
}
</script>

<style lang="less" scoped>
.Cards{
  .header,.header_text{
    display: flex;
    justify-content: space-between;
    gap: 5px;
    p{
      width: 200px;
    }
    &_date{
      width: 100px;
    }
  }
  .header_text{
    font-weight: bolder;
  }
  
  .header:hover{
    background-color: rgb(252, 210, 160);
  }
   .main{
    background-color: inherit;
  }
}
@media screen and (max-width:670px){
  p,.header_date{
    width: 100px;
    font-size: 10px;
  }
  .header_text{display: none;}
}
</style>

