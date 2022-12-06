<template>
  <div :class="$style.contentContainer">
    <h1 :class="$style.header">Добавление нового работника</h1>
    <form :class="$style.form" @submit="sendData($event, this.$router)">
      <input :class="$style.textInput" placeholder="Имя" type="text" ref="firstName"/>
      <input :class="$style.textInput" placeholder="Фамилия" type="text" ref="lastName"/>
      <input :class="$style.textInput" placeholder="Почта" type="text" ref="email"/>
      <input :class="$style.textInput" placeholder="Телефон" type="text" ref="phone"/>
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
  methods:{
    sendData(e, router){
      e.preventDefault();
      console.log(this.isManager)
      if(this.isManager === true){
        let raw = JSON.stringify({
          "last_name": this.$refs.lastName.value,
          "first_name": this.$refs.firstName.value,
          "email": this.$refs.email.value,
          "phone": this.$refs.phone.value
        });
        let requestOptions = {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: raw,
          redirect: 'follow'
        };
        fetch(`http://localhost:5000/personal/managers`, requestOptions).then(res=>res.json()).then(data=>data).catch(e=>console.log(e));
      } else {
        let raw = JSON.stringify({
          "last_name": this.$refs.lastName.value,
          "first_name": this.$refs.firstName.value,
          "email": this.$refs.email.value,
          "phone": this.$refs.phone.value,
          "qualification": this.$refs.qualification.value
        });
        let requestOptions = {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: raw,
          redirect: 'follow'
        };
        fetch(`http://localhost:5000/personal/mechanics`, requestOptions).then(res=>res.json()).then(data=>data).catch(e=>console.log(e));
      }
      router.replace('home');
    }
  }
}
</script>

<style module src='./newPersonStyles.module.scss' lang="scss"></style>