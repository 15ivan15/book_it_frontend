import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio',
    redirect: '/inicio'
  },
  {
    path: '/inicio',
    name: 'inicio',
    component: () => import(/* webpackChunkName: "inicio" */ '../views/Inicio.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import(/* webpackChunkName: "register" */ '../views/Register.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/usuario/:usser',
    name: 'usuario',
    component: () => import(/* webpackChunkName: "usuario" */ '../views/Usuario.vue')
  },
  {
    path: '/eliminar/:usser',
    name: 'eliminar',
    component: () => import(/* webpackChunkName: "eliminar" */ '../views/Eliminar.vue')
  },
  {
    path: '/actualizar/:usser',
    name: 'actualizar',
    component: () => import(/* webpackChunkName: "actualizar" */ '../views/Actualizar.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
