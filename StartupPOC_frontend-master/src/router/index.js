import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import HomeAdministration from "@/views/HomeAdministration";
import store from '@/store';
import AddUser from "@/components/user/AddUser";
import UserInfoCard from "@/components/user/UserInfoCard";
import Forbidden from "../views/Forbidden.vue";


Vue.use(VueRouter)


const routes = [{
        path: '/',
        name: 'Home',
        component: Home,

    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    
    {
        path: '/administration',
        name: 'Administration',
        component: HomeAdministration,
        beforeEnter: (to, from, next) => {
            // console.log(store.getters['auth/authenticated']);
            if (store.getters['auth/getrole'] != "ADMIN" || store.getters['auth/authenticated'] == null) {
                return next({
                    // will put a vue with You don't have the STUDENT ROLE to access
                    name: 'Forbidden'
                })
            }
            next();
        }

    },
    {
        path: '/administration/add',
        name: 'add-user',
        component: AddUser
    },
    {
        path: '/forbidden',
        name: 'Forbidden',
        component: Forbidden
    },
    {
        path: "/administration/users/:id",
        name: "user-info-card",
        component: UserInfoCard
    },
    
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router