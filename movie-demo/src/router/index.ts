// tslint:disable
// import { RouteConfig, createRouter, createWebHistory } from 'vue-router'
import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

// const routes: Array<RouteConfig> = [
const routes: Array<any> = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Index', // name不能为Home，否则路由不起作用
    component: Home
  },
  {
    path: '/list/:type',
    name: 'List',
    component: () => import('@/views/List.vue')
  },
  {
    path: '/detail/:id',
    name: 'Home',
    component: () => import('@/views/Detail.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
