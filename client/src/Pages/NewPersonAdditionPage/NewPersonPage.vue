<template>
  <div :class="$style.contentContainer">
    <h1 :class="$style.header">Добавление нового работника</h1>
    <form :class="$style.form" @submit="sendData">
      <input :class="$style.textInput" placeholder="Имя" type="text" ref="firstName"/>
      <input :class="$style.textInput" placeholder="Фамилия" type="text" ref="lastName"/>
      <input :class="$style.textInput" placeholder="Логин" type="text" ref="login"/>
      <input :class="$style.textInput" placeholder="Пароль" type="text" ref="password"/>
      <input :class="$style.textInput" placeholder="Кввалификация" type="text" ref="qualification" v-if="isManager===false"/>
      <div>
        <input  type="radio" id="masterInput"  name="contact" @click="this.isManager = false" value="master"> <label for="managerInput">Мастер</label>
        <input  type="radio" id="managerInput"  name="contact" @click="this.isManager = true" value="manager"><label for="managerInput" >Менеджер</label>
      </div>

      <button>Отправить</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "NewPersonPage",
  data(){
    return{
      isManager: true,
    }
  },
  components:{
    sendData(){
      if(isManager){
        // fetch(`http://localhost:5000/personal/manager`, requestOptions).then(res=>res.json()).then(data=>resolve(data)).catch(e=>reject(e));
      }
    }
  }
}
</script>

<style module src='./newPersonStyles.module.scss' lang="scss"></style>