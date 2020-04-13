import Vue from 'vue';
import Router from "vue-router";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: () => import('../views/home/home.vue'),
      name: 'Home',
      meta: {}
    },
    {
      path: '/main',
      component: () => import('../views/main/main.vue'),
      name: 'Main',
      meta: {}
    },
    
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
