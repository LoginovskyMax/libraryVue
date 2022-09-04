<template>
<div id="app">
  <nav>
    <router-link to="/">Books</router-link> |
    <router-link to="/gallery">Users</router-link> |
    <router-link to="/contacts">Contacts</router-link>
  </nav>
  <router-view :books="booksArr" 
               @changeBook="saveChanges" 
               @createBook="createBook"
               @deleteBook="deleteBook" 
               :users="UsersArr"
               @changeUser="changeUser"
               @deleteUser="deleteUser"
               @createUser="createUser"
               :cards="CardsArr"
               @returnBook="returnBook"
               @addCard="addCard"
               @deleteCard='deleteCard'/>
</div>
</template>
<script>
import { useRoute } from 'vue-router'

export default {
  data() {
    return{
      booksArr:[{id:1,name:"1984",author:"J.Oruel",pages:256,items:5,popularity:0},
            {id:2,name:"Азбука",author:"AРосмен",pages:33,items:5,popularity:1},
            {id:3,name:"Анна Каренина",author:"Л.Толстой",pages:336,items:2,popularity:2}],
      UsersArr:[{id:1,name:"Иван Иванов",phone:"8 700 2255387",popularity:0},
            {id:2,name:"Макс Максыч",phone:"8 700 3434222",popularity:0},
            {id:3,name:"Жан Жаныч",phone:"8 700 2545454",popularity:0}],
      CardsArr:[{id:1,userName:'Жан Клод',book:'Азбука',addDate:'24.01.2022',returnDate:''}]
    }
  },
  methods:{
    saveChanges(book){
              this.booksArr.forEach(element=>{
                if(element.id==book.id){
                  element=book
                }
              })
    },
    createBook(book){
         this.booksArr.push(book) 
    },
    createUser(user){
          this.UsersArr.push(user)
    },
    deleteBook(id){
      this.booksArr = this.booksArr.filter(book1=>book1.id!=id)
    },
    changeUser(user){
       this.UsersArr.forEach(element=>{
                if(element.id==user.id){
                  element=user
                }
              })
    },
    deleteUser(id){
      this.UsersArr=this.UsersArr.filter(book1=>book1.id!=id)
    },
    deleteCard(id){
        this.CardsArr=this.CardsArr.filter(card=>card.id!=id)
    },
    returnBook(id,book){
      let date = new Date()
      this.CardsArr.forEach(card=>{
        if(card.id==id){
          card.returnDate=date.getDate()+"."+(date.getMonth()+1)+"."+date.getFullYear()
        }
      })
      this.booksArr.forEach(element=>{if(element.name==book){
         element.items++
      }})
    },
    addCard(obj){
      this.CardsArr.push(obj)
      this.booksArr.forEach(element=>{if(element.name==obj.book){
         element.popularity++
         element.items--
      }})
      this.UsersArr.forEach(element=>{if(element.name==obj.userName){
         element.popularity++
      }})
    }
  },
  watch:{
    booksArr:{
       handler(newValue){
      localStorage.setItem("booksArr",JSON.stringify(newValue))
       },
       deep:true
     },
    UsersArr:{
       handler(newValue){
      localStorage.setItem("UsersArr",JSON.stringify(newValue))
       },
       deep:true
     },
    CardsArr:{
       handler(newValue){
      localStorage.setItem("CardsArr",JSON.stringify(newValue))
       },
       deep:true
     },
  },
  mounted(){
    if(localStorage.getItem("booksArr")){
      this.booksArr=JSON.parse(localStorage.getItem("booksArr"))
    }
    if(localStorage.getItem("UsersArr")){
      this.UsersArr=JSON.parse(localStorage.getItem("UsersArr"))
    }
     if(localStorage.getItem("CardsArr")){
      this.CardsArr=JSON.parse(localStorage.getItem("CardsArr"))
    }
  }
}
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background:linear-gradient( to right, white , wheat);
  height: 100Vh;
}
button,select,input{
  background-color: #09d378b9;
  padding: 5px 20px;
  border-radius: 10px;
  font-weight: bolder;
  transition: 0.3s ease-in-out;
  font-style: oblique;
}
button:hover{
  box-shadow: 0 0 10px 10px gray;
  transform: translateY(-3px);
}
nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #09d378;
    }
  }
}
@media screen and (max-width:670px){
  button,select,input{
   padding: 5px;
   font-size: 10px;
  }
  .header_text{display: none;}
}
</style>
