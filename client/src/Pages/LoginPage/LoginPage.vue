<template>
  <div class="contentContainer">
    <input class="input" placeholder="Логин" ref="loginInput" type="text"/>
    <input class="input" placeholder="Пароль" ref="passwordInput" type="password"/>
    <button class="inputButton" @click="this.$router.replace('home')">Войти</button>
    <p class="createLink">Создать аккаунт!</p>
  </div>
</template>

<script>
export default {
  name: "LoginPage"
}
</script>

<style scoped>
.contentContainer{
  width:100%;
  height:86vh;
  display:flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
}

.input{
  width:500px;
  height: 35px;
  border-radius:10px ;
  padding:10px;
  font-size: 14px;
  color: #02070D;

}

.inputButton{
  width:150px;
  height:40px;
  background:#4C5973;
  border-radius: 10px;
  border:none;
  color:white;
  font-size: 18px;
  cursor:pointer;
}
.createLink{
  margin:40px 0 0 0;
  font-size: 14px;
  font-weight:bold;
  color: #02070D;
  font-family:Inter sans-serif;
  cursor:pointer;
}

</style>