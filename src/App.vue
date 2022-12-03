<template>
  <my-header></my-header>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
import MyHeader from "./Components/Header/PersHeader";
export default {
  name: "App",
  components: {MyHeader}

}
</script>

<style >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>