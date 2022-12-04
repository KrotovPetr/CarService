<template>
  <div :class="$style.contentContainer">
    <p :class="$style.navLink" @click="()=>{
      this.$router.replace('home');
    }">&#8592; Назад</p>
    <div :class="$style.personCardsContainer">
      <div :class="$style.managersList">
      <div :class="$style.managerCard" v-for="manager in managers" v-bind:key = "manager.id">
        <h1>Какой-то манагер</h1>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getPersonal} from "@/utils/Functions/getPersonal";

export default {
  name: "PersonalPage",
  data() {
    return {
      managers: [],
      mechanics: [],
    }
  },
  created() {
    this.mechanics = getPersonal('managers').then(data=>);
    this.managers = getPersonal('managers')

    console.log(this.mechanics)
  }
}
</script>
<style module src='./PersonalPage.module.scss' lang="scss"></style>