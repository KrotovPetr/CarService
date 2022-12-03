<template>
  <div :class="$style.contentContainer">
    <div :class="$style.menuVar">
      <img src="http://cdn.onlinewebfonts.com/svg/img_507967.png" @click = "()=>{
          this.$router.replace('orders')
      }">
      <p>Заказы</p>
    </div>
    <div :class="$style.menuVar">
      <img src="http://cdn.onlinewebfonts.com/svg/img_536049.png"  @click = "()=>{
          this.$router.replace('orders')
      }">
      <p>Филиалы</p>
    </div>
    <div :class="$style.menuVar">
      <img src="http://cdn.onlinewebfonts.com/svg/img_37843.png"  @click = "()=>{
          this.$router.replace('orders')
      }">
      <p>Персонал</p>
    </div>
    <div :class="$style.menuVar">
      <img src="http://cdn.onlinewebfonts.com/svg/img_537102.png"  @click = "()=>{
          this.$router.replace('orders')
      }">
      <p>Детали</p>
    </div>
    <div :class="$style.menuVar">
      <img src="http://cdn.onlinewebfonts.com/svg/img_126410.png"  @click = "()=>{
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