<template>
  <div :class="$style.contentContainer">
    <div :class="$style.orderDescription">
      <div :class="$style.characters">
        <p>Заказ: #{{this.orders.idOrderr}}</p>
        <p>Данные: {{this.orders.typeOfService}}</p>
        <p>Номер договора: {{this.orders.idOrderr}}</p>
        <p>Статус: {{this.orders.status}}</p>
      </div>
      <div :class="$style.buttons">
        <button :class="$style.button" @click="this.$router.replace(`/editOrder/${index}`)">Изменить</button>
        <button :class="$style.button" @click="deleteOrder(this.$router)">Удалить</button>
      </div>
    </div>
    <div :class="$style.secondaryDescription">
      <div :class="$style.clientDescription">
        <h1>Менеджер</h1>
        <p>ID: #{{this.orders.manager_idmanager}}</p>
        <p>Ф.И.О.: {{this.orders.manager.last_name + ` `+this.orders.manager.first_name}}</p>
        <p>Контакты: {{this.orders.manager.phone}}</p>
        <p>Почта: {{this.orders.manager.email}}</p>
      </div>
      <div :class="$style.managerDescription">
        <h1>Мастер</h1>
        <p>ID: #{{this.orders.mechanic_idmechanic}}</p>
        <p>Ф.И.О.: {{this.orders.mechanic.last_name + ` `+this.orders.manager.first_name}}</p>
        <p>Контакты: {{this.orders.mechanic.phone}}</p>
        <p>Почта: {{this.orders.mechanic.email}}</p>
        <p>Квалификация: {{this.orders.mechanic.qualification}}</p>
      </div>
      <div :class="$style.mechanicDescription">
        <h1>Данные клиента</h1>
        <p>ID: #{{this.orders.client_idclient}}</p>
        <p>Ф.И.О.: {{this.orders.client.last_name + ` `+this.orders.client.first_name}}</p>
        <p>Контакты: {{this.orders.client.phone}}</p>
        <p>Почта: {{this.orders.client.email}}</p>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "OrderPage",
  data() {
    return {
      orders: [],
      index: null,
    }
  },
  methods: {
      async deleteOrder(router){
        const requestOptions = {
          method: 'DELETE',
        };
        await fetch(`http://localhost:5000/orders?id=${this.index}`, requestOptions)
            .then(response => response.json())
            .catch(error => console.log('error', error));
        router.replace('/orders')
      }
  },
  async created(){
    this.index = this.$router.currentRoute._value.path.split("/")[2];
    let requestOptions = {
      method: 'GET',
    };
    this.orders = await fetch(`http://localhost:5000/orders/current?id=${this.index}`, requestOptions).then(res=>res.json()).then(data=>data).catch(e=>console.log(e));
  }
}
</script>

<style  module src='./OrderPage.module.scss' lang="scss"></style>