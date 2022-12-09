<template>
  <button @click="this.$router.replace('/home')" class="button">Назад</button>
  <div  class="contentContainer" v-for="detail in details" v-bind:key="detail.idDetail">
    <h1> Serial number: {{detail.serial_number}}</h1>
    <p> Brand: {{detail.Brand}}</p>
    <p> Colour: {{detail.Colour}}</p>
  </div>
</template>

<script>
export default {
  name: "DetailsPage",
  data(){
    return{
      details: [],
    }
  },
  async created(){
    this.details = await fetch(`http://localhost:5000/detail/all`).then(res=>res.json()).then(data=>data).catch(e=>console.log(e))
    console.log(this.details)
  }
}
</script>

<style scoped>
.contentContainer{
  width:96%;
  height:150px;
  margin:20px;
  background: #ffffff;
  box-shadow:  5px 5px 23px #c5c5c5,
  -20px -20px 43px #fbfbfb;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  overflow:auto;
}
.button{
  width:150px;
  height:50px;
  background: #4C5973;
  color:white;
  cursor:pointer;
  margin:20px;
}
</style>