<template>
  <button @click="this.$router.replace('/home')" class="button">Назад</button>
  <div  class="contentContainer">
    <h1>Riviera</h1>
    <p>Address: 44 Evergreen Avenue</p>
    <p>Phone: 693-510-0688</p>
  </div>

  <div  class="contentContainer">
    <h1>Argo</h1>
    <p>Address: 4 85 Express Point</p>
    <p>Phone: 178-15-23</p>
  </div>

  <div class="contentContainer">
    <h1>Redis</h1>
    <p>Address: 1464 Dixon Circle </p>
    <p>Phone: 333-33-38</p>
  </div>
</template>

<script>
export default {
  name: "WarehousePage"
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