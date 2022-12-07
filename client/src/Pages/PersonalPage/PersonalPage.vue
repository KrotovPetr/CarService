<template>
  <div :class="$style.contentContainer">
    <p :class="$style.navLink" @click="()=>{
      this.$router.replace('home');
    }">&#8592; Назад</p>
    <div :class="$style.personCardsContainer">
      <div :class="$style.listHeader"><h1>Наши менеджеры:</h1> <button @click="this.$router.replace('newPerson')">Добавить</button></div>
      <div :class="$style.personalList">

        <div :class="$style.personalCard" v-for="manager in managers" v-bind:key = "manager.id">
          <img src="../../utils/Pictures/manager.png" :class="$style.photo"/>
          <p :class="$style.description">{{manager.first_name}} {{manager.last_name}}</p>
        </div>


      </div>
      <div :class="$style.listHeader"><h1>Наши мастера:</h1><button @click="this.$router.replace('newPerson')">Добавить</button></div>
      <div :class="$style.personalList">
        <div :class="$style.personalCard" v-for="mechanic in mechanics" v-bind:key = "mechanic.id">
          <img src="../../utils/Pictures/pin.png" :class="$style.photo"/>
          <p :class="$style.description">{{mechanic.first_name}} {{mechanic.last_name}}</p>
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
  async created() {
    this.mechanics = await getPersonal('mechanics').then(data=>data)
    this.managers= await getPersonal('managers').then(data=>data)
  },

}
</script>
<style module src='./PersonalPage.module.scss' lang="scss"></style>