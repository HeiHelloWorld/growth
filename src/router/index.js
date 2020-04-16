import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/home.vue'
import error_404 from '../views/error/404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {},
    children: [
      {
        path: '/a',
        name: 'A',
        component: () => import('../views/home/a.vue')
      },
      {
        path: '/b',
        name: 'B',
        component: () => import('../views/home/b.vue')
      }
    ]
  },
  {
    path: '/main/:username',
    name: 'Main',
    component: () => import('../views/main/main.vue')
  },
  {
    path: '*',
    component: error_404
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
