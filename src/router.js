import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/battery',
      name: 'battery',
      component: () => import(/* webpackChunkName: "about" */ './views/Battery.vue')
    },
    {
      path: '/',
      name: 'demo',
      component: () => import(/* webpackChunkName: "about" */ './views/demo.vue')
    },
    {
      path: '/scan',
      name: 'scan',
      component: () => import(/* webpackChunkName: "about" */ './views/Scan.vue')
    },
    {
      path: '/make',
      name: 'make',
      component: () => import(/* webpackChunkName: "about" */ './views/Make.vue')
    }
  ]
})
