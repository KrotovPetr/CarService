<template>
  <div class="contentContainer">
    <input class="input" placeholder="Логин" ref="loginInput" type="text"/>
    <input class="input" placeholder="Пароль" ref="passwordInput" type="password"/>
    <button class="inputButton" @click="loginUser(this.$router)">Войти</button>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data(){
    return{
      managers: [],
    }
  },
  methods: {
    async loginUser(router){
      let login = this.$refs.loginInput.value;
      let password = this.$refs.passwordInput.value;
      let user = this.managers.filter((elem)=>
        elem.login === login
      )
      if(user[0].length!==0){
        if(password === user[0].password){
          router.replace('home');
        }
      } else {
        alert("Некорректные данные!")
      }
    }
  },
  async created(){
    this.managers = await fetch(`http://localhost:5000/personal/managers`).then(res=>res.json()).then(data=>data).catch(e=>console.log(e));
  }
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