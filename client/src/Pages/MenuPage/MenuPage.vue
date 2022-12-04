<template>
  <div :class="$style.contentContainer">
    <div :class="$style.menuVar">
      <img src="../../utils/Pictures/list.png" @click = "()=>{
          this.$router.replace('orders')
      }">
      <p>Заказы</p>
    </div>
    <div :class="$style.menuVar">
      <img src="../../utils/Pictures/key.png" @click = "()=>{
          this.$router.replace('services')
      }">
      <p>Филиалы</p>
    </div>
    <div :class="$style.menuVar">
      <img src="../../utils/Pictures/personal.png" @click = "()=>{
          this.$router.replace('personal')
      }">
      <p>Персонал</p>
    </div>
    <div :class="$style.menuVar">
      <img src="../../utils/Pictures/tool.png" @click = "()=>{
          this.$router.replace('orders')
      }">
      <p>Детали</p>
    </div>
    <div :class="$style.menuVar">
      <img src="../../utils/Pictures/warehouse.png" @click = "()=>{
          this.$router.replace('orders')
      }">
      <p>Склады</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "MenuPage",

}
</script>


<style module src='./MenuPage.module.scss' lang="scss"></style>