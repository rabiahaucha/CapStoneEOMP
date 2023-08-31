import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
    {
    path: '/bakery',
    name: 'bakery',
    component: () => import('../views/BakeryView.vue')
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: () => import('../views/CheckoutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('../views/AdminView.vue')
  },
  {
    path: '/single/:id',
    name: 'single',
    props: true,
    component: () => import( '../views/SingleView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition){
    if(savedPosition){
      return{ ...savedPosition, behavior: "smooth"}
    } else if (to.hash){
      return {el: to.hash, behavior: "smooth"}
    } else{
      return {top: 200, behavior: "smooth"}
    }
  }
})

export default router
