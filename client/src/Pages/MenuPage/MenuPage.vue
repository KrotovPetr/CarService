<template>
  <div :class="$style.contentContainer">
    <div :class="$style.menuVar" @click = "()=>{
          this.$router.replace('orders')
      }">
      <img src="../../utils/Pictures/list.png" >
      <p>Заказы</p>
    </div>
    <div :class="$style.menuVar"  @click = "()=>{
          this.$router.replace('services')
      }">
      <img src="../../utils/Pictures/key.png">
      <p>Филиалы</p>
    </div>
    <div :class="$style.menuVar" @click = "()=>{
          this.$router.replace('personal')
      }">
      <img src="../../utils/Pictures/personal.png" >
      <p>Персонал</p>
    </div>
    <div :class="$style.menuVar" @click = "()=>{
          this.$router.replace('detail')
      }">
      <img src="../../utils/Pictures/tool.png" >
      <p>Детали</p>
    </div>
    <div :class="$style.menuVar"  @click = "()=>{
          this.$router.replace('warehouse')
      }">
      <img src="../../utils/Pictures/warehouse.png">
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