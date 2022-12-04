<template>
  <div class="header">
    <img class="logo" src="../../utils/Pictures/logo.png">
    <div class="name">CarService</div>
  </div>
</template>

<script>
export default {
  name: "MyHeader"
}
</script>

<style scoped>

.header{
  width:100%;
  background: #4C5973;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
  height:100px;
}

.logo{
  width:60px;
  height: 60px;
  
}

.name{
  font-size:32px;
  color:white;
  font-family: 'Inter', sans-serif;
}

</style>

<!--/* Color Theme Swatches in Hex */-->
<!--.Мода-1-hex { color: #4C5973; }-->
<!--.Мода-2-hex { color: #02070D; }-->
<!--.Мода-3-hex { color: #6D86A6; }-->
<!--.Мода-4-hex { color: #011526; }-->
<!--.Мода-5-hex { color: #F2C094; }-->

<!--/* Color Theme Swatches in RGBA */-->
<!--.Мода-1-rgba { color: rgba(75, 88, 114, 1); }-->
<!--.Мода-2-rgba { color: rgba(1, 6, 12, 1); }-->
<!--.Мода-3-rgba { color: rgba(109, 133, 165, 1); }-->
<!--.Мода-4-rgba { color: rgba(0, 20, 38, 1); }-->
<!--.Мода-5-rgba { color: rgba(242, 191, 147, 1); }-->

<!--/* Color Theme Swatches in HSLA */-->
<!--.Мода-1-hsla { color: hsla(219, 20, 37, 1); }-->
<!--.Мода-2-hsla { color: hsla(213, 75, 2, 1); }-->
<!--.Мода-3-hsla { color: hsla(213, 23, 53, 1); }-->
<!--.Мода-4-hsla { color: hsla(208, 96, 7, 1); }-->
<!--.Мода-5-hsla { color: hsla(28, 78, 76, 1); }-->
