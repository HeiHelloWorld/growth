import Vue from 'vue';
import Router from "vue-router";

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/home',
      component: () => import('/src/views/home/home.vue'),
      name: 'Home'
    },
    {
      path: '/main',
      component: () => import('/src/views/main/main.vue'),
      name: 'Main'
    }
  ]
})