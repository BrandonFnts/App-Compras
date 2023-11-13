import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ManagerComponent from '../components/proveedores/ManagerComponent.vue'
import RegistrarProveedoresComponent from '@/components/proveedores/RegistrarProveedoresComponent.vue'
import LoginView from '../views/LoginView.vue'
import SiginView from '../views/SiginView.vue'

import { ValidationProvider } from 'vee-validate';

Vue.component('ValidationProvider', ValidationProvider);


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/manager-proveedores',
    name: 'manager-proveedores',
    component: ManagerComponent
  },
  {
    path: '/registrar-proveedores',
    name: 'registrar-proveedores',
    component: RegistrarProveedoresComponent
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/sigin',
    name: 'sigin',
    component: SiginView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
