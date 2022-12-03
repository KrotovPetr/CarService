<template>
  <div :class="$style.contentContainer">
    <p :class="$style.navLink" @click="()=>{
      this.$router.replace('home');
    }">&#8592; Назад</p>
    <div :class="$style.ordersContainer">
      <div :class="$style.order" v-for="order in orders" v-bind:key="order.id">
        <div :class="$style.orderHeader"><h3 :class="$style.orderNumber">Заказ #{{order.id}}</h3></div>
        {{order.author}}


        <!--        <order-component />-->
      </div>
    </div>

  </div>
</template>

<script>
// import OrderComponent from "@/Components/Order/OrderComponent";
export default {
  // components: {OrderComponent},
  data() {
    return {
      likes: 0,
      orders: [
        {id: 1, author: "Peter", description: "Car washing"},
        {id: 2, author: "Peter2", description: "Car washing2"},
        {id: 3, author: "Peter3", description: "Car washing3"},
        {id: 4, author: "Peter3", description: "Car washing3"},
        {id: 5, author: "Peter3", description: "Car washing3"},
        {id: 6, author: "Peter3", description: "Car washing3"},
        {id: 7, author: "Peter3", description: "Car washing3"},
        {id: 8, author: "Peter3", description: "Car washing3"},
        {id: 9, author: "Peter3", description: "Car washing3"},
      ]
    }
  },
  name: "OrdersPage"
}
</script>

<style module src='./OrdersPage.module.scss' lang="scss"></style>