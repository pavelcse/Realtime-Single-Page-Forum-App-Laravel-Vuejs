import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import LoginComponent from "../components/login/LoginComponent";
const routes = [
    { path: '/login', component: LoginComponent }
];

const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history'
});

export default router
