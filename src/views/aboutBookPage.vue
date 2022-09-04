<template>
  <div class="book">
    <p>This is your book </p>
    <button @click="openModal" >Изменить данные о книге</button>
    <div class="modalWindow" v-if="show" v-on:click.stop="closeModal">
      <div class="modalItem" @click.stop>
          Название<input type="text" v-model="book.name">
          Автор<input type="text" v-model="book.author">
          Страницы<input type="number" v-model="book.pages">
          Количество<input type="number" v-model="book.items">
          <button @click="Save">Сохранить изменения</button>
          <button @click="Delete">Удалить книгу</button>
      </div>
    </div>
     <h2>{{book.name}}</h2>
     <p>Автор : {{book.author}}</p>
     <p>Количество страниц: {{book.pages}}</p>
     <p>На складе осталось: {{book.items}}</p>
     <p>Эту книгу брали {{book.popularity}} раза</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props:["id","books"],
  data(){
    return{
      book:{},
      show:false
    }
  },
  methods:{
    openModal(){
      this.show=true
    },
    closeModal(){
       this.show=false
    },
    Save(){
      this.$emit("changeBook",this.book)
      this.show=false
      this.$router.push("/")
    },
    Delete(){
      this.$emit("deleteBook",this.id)
      this.show=false
      this.$router.push("/")
    }
  },
  mounted(){
    this.books.forEach(element => {
      if(element.id==this.id){
            this.book=element
      }
    });
   
  }
}
</script>

<style scoped lang="less">
.modalWindow{
  position: fixed;
  top:0;
  bottom:0;
  right:0;
  left:0;
  background-color: rgba(0, 255, 255, 0.26);
  display: flex;
  justify-content: center;
}
.modalItem{
  width: 300px;
  border-radius: 20px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: aqua;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
