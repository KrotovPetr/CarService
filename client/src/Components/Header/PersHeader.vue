<template>
  <div :class="$style.header" >
    <img :class="$style.logo" src="../../utils/Pictures/logo.png">
    <div :class="$style.name">CarService</div>
  </div>
</template>

<script>
export default {
  name: "MyHeader"
}
</script>

<style lang="scss" src="./PersHeader.module.scss" module></style>

