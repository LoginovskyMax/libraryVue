<template>
<div class="main">
  <div v-if="!user">
  <h2>Название: {{name}}</h2>
  <p>Автор: {{author}}</p>
  </div>
  <div v-else>
     <h2>Имя: {{userName}}</h2>
     <p>Телефон: {{phone}}</p>
  </div>
  <button type="button" @click="this.$router.push('/books'+ id)" v-if="!user">Подробнее</button>
  <button type="button" @click="this.$router.push('/users'+ userId)" v-else>Подробнее</button>
</div>

</template>

<script>
export default {
props:["id","name","author",'userName','userId','phone','user'],
}
</script>

<style lang="less" scoped>
.main{
    padding: 20px;
    border: 2px solid black;
    border-radius: 20px;
    width: 200px;
    height: 250px;
    overflow: hidden;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    button{
     justify-self: flex-end;
    }
    
}
</style>