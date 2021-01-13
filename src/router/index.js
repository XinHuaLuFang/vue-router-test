import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/',
        redirect: '/about'
      },
      {
        name: 'about',
        path: '/about',
        component: () => import('../views/About.vue')
      }
    ]
  }
]

export const routesAdmin = [
  {
    path: '/home',
    component: Home,
    children: [
      {
        name: 'adminA',
        path: '/adminA',
        component: () => import('../views/AdminA')
      },
      {
        name: 'adminB',
        path: '/adminB',
        component: () => import('../views/AdminB')
      }
    ]
  }
]

export const routesDev = [
  {
    path: '/home',
    component: Home,
    children: [
      {
        name: 'devA',
        path: '/devA',
        component: () => import('../views/DevA')
      },
      {
        name: 'devB',
        path: '/devB',
        component: () => import('../views/DevB')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
