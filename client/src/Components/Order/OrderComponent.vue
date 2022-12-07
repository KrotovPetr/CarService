<template>
  <div>
    <div :class="$style.orderHeader">
      <h3 :class="$style.orderNumber">Заказ #{{order.idOrderr}}</h3>
      <img :class="$style.orderStatus" src="../../utils/Pictures/done.png" v-if="order.status === 'done'" alt="done"/>
      <img :class="$style.orderStatus" src="../../utils/Pictures/inWork.png" v-if="order.status === 'In work'" alt="in work"/>
      <img :class="$style.orderStatus" src="../../utils/Pictures/cancel.png" v-if="order.status === 'cancelled'" alt="cancel"/>
    </div>
    <div :class="$style.orderDescription">
      <div :class="$style.desriptionColumn">
        <p :class="$style.orderCharact">Deed number: {{order["deed_number"]}}</p>
        <p :class="$style.orderCharact">Manager ID: {{order["Data"]}}</p>
      </div>
      <div :class="$style.desriptionColumn">
        <p :class="$style.orderCharact">Client ID: {{order["client_idclient"]}}</p>
        <p :class="$style.orderCharact">Manager ID: {{order["manager_idmanager"]}}</p>
        <p :class="$style.orderCharact">Mechanic ID: {{order["mechanic_idmechanic"]}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OrderComponent",
  props: {
    order: {
      idOrderr: Number,
      Data: String,
      deed_number: String,
      typeOfService: String,
      status: String,
      mechanic_idmechanic: Number,
      manager_idmanager: Number,
      detail_iddetail: Number,
      client_idclient: Number,
    }
  }
}
</script>

<style lang="scss" src="./Order.module.scss" module>

</style>