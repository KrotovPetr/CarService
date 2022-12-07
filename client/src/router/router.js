import {createRouter, createWebHistory} from "vue-router";
import LoginPage from "../Pages/LoginPage/LoginPage";
import MenuPage from "../Pages/MenuPage/MenuPage";
import OrdersPage from "../Pages/OrdersPage/OrdersPage";
import ServicePage from "@/Pages/ServicesPage/ServicePage";
import PersonalPage from "@/Pages/PersonalPage/PersonalPage";
import NewPersonPage from "@/Pages/NewPersonAdditionPage/NewPersonPage";
import OrderPage from "@/Pages/OrderPage/OrderPage";
import editOrderPage from "@/Pages/EditOrderPage/editOrderPage";
import createOrderPage from "@/Pages/CreateOrderPage/CreateOrderPage";

const routes= [
    {path: '/', name: 'login',   component: LoginPage },
    {path: '/home', name: 'home', component: MenuPage },
    {path: '/orders', name: 'orders', component: OrdersPage },
    {path: '/services', name: 'services', component: ServicePage },
    {path: '/personal', name: 'personal', component: PersonalPage },
    {path: '/newPerson', name: 'newPerson', component: NewPersonPage },
    {path: '/orders/:id', name: 'order', component: OrderPage},
    {path: '/editOrder/:id', name: 'editOrder', component: editOrderPage},
    {path: '/orders/create', name: 'createOrder', component: createOrderPage},
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})
export default router;