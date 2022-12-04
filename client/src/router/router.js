import {createRouter, createWebHistory} from "vue-router";
import LoginPage from "../Pages/LoginPage/LoginPage";
import MenuPage from "../Pages/MenuPage/MenuPage";
import OrdersPage from "../Pages/OrdersPage/OrdersPage";
import ServicePage from "@/Pages/ServicesPage/ServicePage";
import PersonalPage from "@/Pages/PersonalPage/PersonalPage";

const routes= [
    {path: '/', name: 'login',   component: LoginPage },
    {path: '/home', name: 'home', component: MenuPage },
    {path: '/orders', name: 'orders', component: OrdersPage },
    {path: '/services', name: 'services', component: ServicePage },
    {path: '/personal', name: 'personal', component: PersonalPage },
]

console.log(process.env)
const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
})
export default router;