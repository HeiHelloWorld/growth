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
    meta: {
      showAside: false
    },
    children: [
      {
        path: '/a',
        name: 'A',
        component: () => import('@/views/home/components/a.vue')
      },
      {
        path: '/b',
        name: 'B',
        component: () => import('@/views/home/components/b.vue')
      }
    ]
  },
  {
    path: '/main/:username',
    name: 'Main',
    meta: {
      showAside: true
    },
    component: () => import('@/views/main/main.vue')
  },
  {
    path: '/aa',
    name: 'Aa',
    meta: {
      showAside: true
    },
    component: () => import('@/views/es5/js/aa.vue')
  },
  {
    path: '*',
    meta: {
      showAside: false
    },
    component: error_404
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
