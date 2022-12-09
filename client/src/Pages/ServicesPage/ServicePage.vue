<template>
  <button @click="this.$router.replace('/home')" class="button">Назад</button>
  <div  class="contentContainer">
    <h1>"Hartmann Group"</h1>
    <p>"2955 La Follette Trail"</p>
    <p>"795-969-3830"</p>
  </div>

  <div  class="contentContainer">
    <h1>"Langosh-Stehr"</h1>
    <p>"9001 Brown Plaza"</p>
    <p>"737-310-4177"</p>
  </div>

  <div class="contentContainer">
    <h1>"Jones Group"</h1>
    <p>"4 Anthes Road"</p>
    <p>"342-211-0274"</p>
  </div>
</template>

<script>
export default {
  name: "ServicePage",
  data(){
    return{
      carServices: [],
    }

  },
  async created(){
    this.carservices = await fetch(`http://localhost:5000/service`).then(res=>res.json()).then(data=>data).catch(e=>console.log(e));
    console.log(this.carservices)
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