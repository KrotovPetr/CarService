<template>
  <div :class="$style.contentContainer">
    <p :class="$style.navLink" @click="()=>{
      this.$router.replace('/orders');
    }">&#8592; Назад</p>
    <h1 :class="$style.contentHeader">Формирование заказа</h1>
    <form :class="$style.formContainer" @submit="addNewOrder($event. this.$router)">
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
        <input placeholder="Email" ref="emailInput"/>
        <input placeholder="Имя клиента" ref="firstNameInput"/>
        <input placeholder="Фамилия" ref="lastNameInput"/>
        <input placeholder="Телефон" ref="phoneInput"/>
        <input placeholder="VIN" ref="VINInput"/>
        <input placeholder="Тип" ref="TypeInput"/>
        <input placeholder="Номер рамы" ref="frameNumberInput"/>
        <input placeholder="Цвет" ref="colourInput"/>
        <input placeholder="Модель" ref="modelInput"/>
      </div>

      <h1 :class="$style.contentHeader">Новая деталь</h1>
      <div :class="$style.inputDataBlock">
        <input placeholder="Цвет" ref="colourDetailInput"/>
        <input placeholder="Марка" ref="BrandInput"/>
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
      <button :class="$style.submitButton">Создать</button>
    </form>


  </div>
</template>

<script>
import {getPersonal} from "@/utils/Functions/getPersonal";

export default {
  name: "CreateOrderPage",
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
      isNewClient: false,
      isNewCar: false,
    }
  },
  methods:{
    async addNewOrder(e, router){
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
      let car = await fetch(`http://localhost:5000/car/current?VIN=${this.$refs.VINInput.value}`, requestOptions).then(res=>res.json()).then(data=>data).catch(e=>console.log(e));
      if(car===null){
        let raw = JSON.stringify({
          "Type": this.$refs.TypeInput.value,
          "VIN": this.$refs.VINInput.value,
          "frame_number": this.$refs.frameNumberInput.value,
          "Colour": this.$refs.colourInput.value,
          "Model": this.$refs.modelInput.value,
          "Client_idClient": person.idClient
        });
        requestOptions = {
          method: 'POST',
          headers: {"Content-Type": "application/json"},
          body: raw,
          redirect: 'follow'
        };
        fetch("http://localhost:5000/car", requestOptions)
            .then(response => response.json())
            .then(result => result)
            .catch(error => console.log('error', error));
      }
      let raw = JSON.stringify({
        "Colour": this.$refs.colourDetailInput.value,
        "Brand": this.$refs.BrandInput.value,
      });
      requestOptions = {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: raw,
        redirect: 'follow'
      };
      let detail = await fetch(`http://localhost:5000/detail`, requestOptions).then(res=>res.json()).then(data=>data).catch(e)
      raw = JSON.stringify({
        "Warehouse_idWarehouse": Number.parseInt(this.warehouseSelected.id),
        "Detail_idDetail": detail.idDetail,
      });
      requestOptions = {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: raw,
        redirect: 'follow'
      };
      await fetch(`http://localhost:5000/detail-warehouse`, requestOptions).then(res=>res.json()).then(data=>data).catch(e)
      raw = JSON.stringify({
        "Mechanic_idMechanic": this.mechanicSelected.id,
        "Manager_idManager": this.managerSelected.id,
        "Detail_idDetail": detail.idDetail,
        "Client_idClient": person.idClient,
        "typeOfService": this.typeOfJob
      });
      requestOptions = {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: raw,
        redirect: 'follow'
      };
      let order = await fetch(`http://localhost:5000/orders`, requestOptions).then(res=>res.json()).then(data=>data).catch(e)
      raw = JSON.stringify({
        "Orderr_idOrderr": order.idOrderr,
        "CarService_idCarService": this.carServicesSelected.id
      });
      requestOptions = {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: raw,
        redirect: 'follow'
      };
      await fetch(`http://localhost:5000/order-carservice`, requestOptions).then(res=>res.json()).then(data=>data).catch(e)
      router.replace('/orders');
    }

  },
  async created(){
    this.mechanics = await getPersonal('mechanics').then(data=>data)
    this.managers= await getPersonal('managers').then(data=>data)
    let requestOptions = {
      method: 'GET',
    };
    this.warehouses = await fetch(`http://localhost:5000/warehouse/all`, requestOptions).then(res=>res.json()).then(data=>data).catch(e=>console.log(e));
    this.carServices = await fetch(`http://localhost:5000/service`, requestOptions).then(res=>res.json()).then(data=>data).catch(e=>console.log(e));
  }
}
</script>

<style module src='./CreatePageStyles.module.scss' lang="scss"></style>