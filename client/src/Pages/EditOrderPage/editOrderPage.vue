<template>
  <div :class="$style.contentContainer">
    <p :class="$style.navLink" @click="()=>{
      this.$router.replace('/orders');
    }">&#8592; Назад</p>
    <h1 :class="$style.contentHeader">Изменение заказа</h1>
    <form :class="$style.formContainer" @submit="editOrder($event, this.$router)" v-if="this.order!==null">
      <div :class="$style.selectBlock">
        <p :class="$style.selectHeader">Тип услуги: </p>
        <select v-model="typeOfJob">
          <option value="washing">Мойка</option>
          <option value="repairing">Ремонт</option>
          <option value="inspection">Осмотр</option>
        </select>
      </div>
      <div :class="$style.selectBlock">
       <p :class="$style.selectHeader">Статус услуги: </p>
        <select v-model="statusSelected">
          <option value="done">Готов</option>
          <option value="In work">В работе</option>
          <option value="cancelled">Отменён</option>
        </select>
      </div>
      <div :class="$style.selectBlock">
        <p>Выбранный мастер: {{this.oldMechanic.last_name}}  {{this.oldMechanic.first_name}}</p><p :class="$style.selectHeader">Мастер:  </p>
        <select v-model="mechanicSelected">
          <option v-for="mechanic in mechanics" v-bind:key="mechanic.idMechanic"  :value="{id: mechanic.idMechanic}">
            {{mechanic.last_name}}  {{mechanic.first_name}}
          </option>
        </select>
      </div>
      <div :class="$style.selectBlock">
        <p>Выбранный менеджер: {{this.oldManager.last_name}}  {{this.oldManager.first_name}}</p><p :class="$style.selectHeader">Менеджер:  </p>
        <select v-model="managerSelected">
          <option v-for="manager in managers" v-bind:key="manager.idManager"  :value="{id: manager.idManager}">
            {{manager.last_name}}  {{manager.first_name}}
          </option>
        </select>
      </div>

      <h1 :class="$style.contentHeader">Данные клиента</h1>
      <div :class="$style.inputDataBlock">
        <input placeholder="Email" ref="emailInput" :value="this.order.client.email"/>
        <input placeholder="Имя клиента" ref="firstNameInput" :value="this.order.client.first_name"/>
        <input placeholder="Фамилия" ref="lastNameInput" :value="this.order.client.last_name"/>
        <input placeholder="Телефон" ref="phoneInput" :value="this.order.client.phone"/>
      </div>

      <h1 :class="$style.contentHeader">Новая деталь</h1>
      <div :class="$style.selectBlock">
        <p :class="$style.selectHeader">Деталь:  </p>
        <select v-model="detailSelected">
          <option v-for="detail in details" v-bind:key="detail.idManager"  :value="{id: detail.idDetail}">
            {{detail.Brand}}
          </option>
        </select>
      </div>

      <button :class="$style.submitButton">Изменить</button>
    </form>
  </div>
</template>

<script>

import {getPersonal} from "@/utils/Functions/getPersonal";

export default {
  name: "editOrderPage",
  data(){
    return{
      typeOfJob: null,
      mechanicSelected:null,
      managerSelected:null,
      warehouseSelected:null,
      carServicesSelected:null,
      statusSelected:null,
      detailSelected:null,
      oldMechanic: 0,
      oldManager: 0,
      mechanics: [],
      managers: [],
      warehouses:[],
      carServices:[],
      details:[],
      car: {},
      order: null,
    }
  },
  methods: {
    async editOrder(e, router){
      e.preventDefault();
      let requestOptions = {
        method: 'GET',
      };
      let person = await fetch(`http://localhost:5000/client/current?email=${this.$refs.emailInput.value}`, requestOptions).then(res=>res.json()).then(data=>data).catch(e=>console.log(e));
      if(person === null){
        let raw = JSON.stringify({
          "last_name": this.$refs.lastNameInput.value,
          "first_name": this.$refs.firstNameInput.value,
          "email": this.$refs.emailInput.value,
          "phone": this.$refs.phoneInput.value}
        );
        let requestOptions = {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: raw,
          redirect: 'follow'
        };
        person = await fetch("http://localhost:5000/client/new", requestOptions)
            .then(response => response.json())
            .then(result => result)
            .catch(error => console.log('error', error));
      }
      let raw = JSON.stringify({
        "typeOfService": this.typeOfJob,
        "Mechanic_idMechanic": this.mechanicSelected.id,
        "Manager_idManager": this.managerSelected.id,
        "Detail_idDetail": this.detailSelected.id,
        "Client_idClient": person.idClient,
         "status": this.statusSelected
      });
      requestOptions = {
        method: 'PATCH',
        headers: {"Content-Type": "application/json"},
        body: raw,
        redirect: 'follow'
      };
      await fetch(`http://localhost:5000/orders?id=${this.order.idOrderr}`, requestOptions).then(res=>res.json()).then(data=>data).catch(e=>console.log(e))
      router.replace('/orders');
    }
  },
  async created(){
    this.mechanics = await getPersonal('mechanics').then(data=>data)
    this.managers= await getPersonal('managers').then(data=>data)
    this.warehouses = await fetch(`http://localhost:5000/warehouse/all`).then(res=>res.json()).then(data=>data).catch(e=>console.log(e));
    this.carServices = await fetch(`http://localhost:5000/service`).then(res=>res.json()).then(data=>data).catch(e=>console.log(e));
    this.order = await fetch(`http://localhost:5000/orders/current?id=${this.$router.currentRoute._value.path.split("/")[2]}`).then(res=>res.json()).then(data=>data).catch(e=>console.log(e));
    this.details = await fetch(`http://localhost:5000/detail/all`).then(res=>res.json()).then(data=>data).catch(e=>console.log(e));
    this.oldMechanic = this.mechanics.filter((elem)=>elem.idMechanic === this.order.Mechanic_idMechanic)[0]
    this.oldManager = this.managers.filter((elem)=>elem.idManager === this.order.Manager_idManager)[0]
  }
}
</script>

<style  module src='./editOrderStyles.module.scss' lang="scss"></style>