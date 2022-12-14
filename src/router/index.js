import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import THeDetail from '../views/THeDetail.vue'
import TheWrite from '../views/TheWrite.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path:'/board/detail/:id',
    name: 'Detail',
    component:THeDetail
  },
  {
    path:"/board/write/:id?",
    name:"Write",
    component:TheWrite
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
