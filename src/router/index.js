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
      title: 'Home',
      showAside: false
    }
  },
  {
    path: '/main',
    name: 'Main',
    meta: {
      title: 'Main',
      showAside: true
    },
    component: () => import('@/views/main/main.vue'),
    children: [
      {
        path: '/main/a',
        name: 'A',
        meta: {
          title: 'A',
          showAside: true
        },
        component: () => import('@/views/main/components/a.vue')
      },
      {
        path: '/main/b',
        name: 'B',
        meta: {
          title: 'B',
          showAside: true
        },
        component: () => import('@/views/main/components/b.vue')
      }
    ]
  },
  {
    path: '/aa',
    name: 'Aa',
    meta: {
      title: 'Aa',
      showAside: true
    },
    component: () => import('@/views/es5/js/aa.vue')
  },
  {
    path: '*',
    name: '404',
    meta: {
      title: '404',
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
