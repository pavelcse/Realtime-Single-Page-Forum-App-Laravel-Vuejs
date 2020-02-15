import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import LoginComponent from "../components/login/LoginComponent";
import SignupComponent from "../components/register/SignupComponent";
import ForumComponent from "../components/forum/ForumComponent";
import LogoutComponent from "../components/logout/LogoutComponent";
const routes = [
    { path: '/login', component: LoginComponent },
    { path: '/logout', component: LogoutComponent },
    { path: '/signup', component: SignupComponent },
    { path: '/forum', component: ForumComponent, name: 'forum' },
];

const router = new VueRouter({
    routes,
    hashbang: false,
    mode: 'history'
});

export default router
