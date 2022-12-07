<template>
  <div :class="$style.contentContainer">
    <p :class="$style.navLink" @click="()=>{
      this.$router.replace('/orders');
    }">&#8592; Назад</p>
    <h1 :class="$style.contentHeader">Изменение заказа</h1>
    <form :class="$style.formContainer" @submit="editOrder($event. this.$router)">
      <div :class="$style.selectBlock">
        <p :class="$style.selectHeader">Тип услуги: </p>
        <select v-model="typeOfJob">
          <option value="washing">Мойка</option>
          <option value="repairing">Ремонт</option>
          <option value="inspection">Осмотр</option>
        </select>
      </div>
      <div :class="$style.selectBlock">
        <p :class="$style.selectHeader">Мастер:  </p>
        <select v-model="mechanicSelected">
          <option v-for="mechanic in mechanics" v-bind:key="mechanic.idMechanic"  :value="{id: mechanic.idMechanic}">
            {{mechanic.last_name}}  {{mechanic.first_name}}
          </option>
        </select>
      </div>
      <div :class="$style.selectBlock">
        <p :class="$style.selectHeader">Менеджер:  </p>
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
        <input placeholder="VIN" ref="VINInput"/>
        <input placeholder="Тип" ref="TypeInput"/>
        <input placeholder="Номер рамы" ref="frameNumberInput"/>
        <input placeholder="Цвет" ref="colourInput"/>
        <input placeholder="Модель" ref="modelInput"/>
      </div>

      <h1 :class="$style.contentHeader">Новая деталь</h1>
      <div :class="$style.inputDataBlock">
        <input placeholder="Цвет" ref="colourDetailInput" :value="this.order.detail.Colour"/>
        <input placeholder="Марка" ref="BrandInput" :value="this.order.detail.Brand"/>
      </div>
      <div :class="$style.selectBlock">
        <p :class="$style.selectHeader">Склад:  </p>
        <select v-model="warehouseSelected">
          <option v-for="warehouse in warehouses" v-bind:key="warehouse.idWarehouse"  :value="{id: warehouse.idWarehouse}">
            {{warehouse.Address}}
          </option>
        </select>
      </div>
      <div :class="$style.selectBlock">
        <p :class="$style.selectHeader">Сервис:  </p>
        <select v-model="carServicesSelected">
          <option v-for="carService in carServices" v-bind:key="carService.idCarService"  :value="{id: carService.idCarService}">
            {{carService.address}}
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
      mechanics: [],
      managers: [],
      warehouses:[],
      carServices:[],
      car: {},
      order: {},
    }
  },
  async created(){
    this.mechanics = await getPersonal('mechanics').then(data=>data)
    this.managers= await getPersonal('managers').then(data=>data)
    this.warehouses = await fetch(`http://localhost:5000/warehouse/all`).then(res=>res.json()).then(data=>data).catch(e=>console.log(e));
    this.carServices = await fetch(`http://localhost:5000/service`).then(res=>res.json()).then(data=>data).catch(e=>console.log(e));
    this.order = await fetch(`http://localhost:5000/orders/current?id=${this.$router.currentRoute._value.path.split("/")[2]}`).then(res=>res.json()).then(data=>data).catch(e=>console.log(e));
    // this.car = await fetch(`http://localhost:5000/car/current?id=${this.order.client.idClient}`).then(res=>res.json()).then(data=>data).catch(e=>console.log(e));
    this.mechanicSelected = this.order.mechanic.last_name+' '+this.order.mechanic.first_name;
  }
}
</script>

<style  module src='./editOrderStyles.module.scss' lang="scss"></style>