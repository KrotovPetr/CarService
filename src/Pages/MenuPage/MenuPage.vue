<template>
  <div class="contentContainer">
    <div class="menuVar">Заказы</div>
    <div class="menuVar">Филиалы</div>
    <div class="menuVar">Персонал</div>
    <div class="menuVar">Детали</div>
    <div class="menuVar">Склады</div>

  </div>
</template>

<script>
export default {
  name: "MenuPage",

}
</script>


<style scoped>
.contentContainer{
  width:100%;
  height:86vh;
  display:flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
}
.menuVar{
  width:300px;
  height:300px;
  border-radius: 50px;
  background: #ffffff;
  box-shadow:  10px 10px 13px #c5c5c5,
  -20px -20px 43px #fbfbfb;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
  cursor:pointer;
}
</style>