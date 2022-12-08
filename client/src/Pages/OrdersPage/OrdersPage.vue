<template>
  <div :class="$style.contentContainer">
    <div :class="$style.ordersHeader">
      <p :class="$style.navLink" @click="()=>{
      this.$router.replace('home');
    }">&#8592; Назад</p>
      <button :class="$style.addButton" @click="this.$router.replace('/orders/create')">Добавить заказ</button>
    </div>
    <div :class="$style.ordersContainer">
      <order-component :class="$style.order" v-bind:order="order" v-for="order in orders" v-bind:key="order.idOrderr" @click="this.$router.replace(`/orders/${order.idOrderr}`)"> </order-component>
    </div>

  </div>
</template>

<script>
// import OrderComponent from "@/Components/Order/OrderComponent";
import OrderComponent from "@/Components/Order/OrderComponent";
export default {
  components: {OrderComponent},
  // components: {OrderComponent},
  data() {
    return {
      likes: 0,
      orders: []
    }
  },
  name: "OrdersPage",
  methods: {
  },
  async created() {
    let requestOptions = {
      method: 'GET',
    };
    this.orders = await fetch(`http://localhost:5000/orders/all`, requestOptions).then(res=>res.json()).then(data=>data).catch(e=>console.log(e));
    console.log(this.orders)
  }


}
</script>

<style module src='./OrdersPage.module.scss' lang="scss"></style>