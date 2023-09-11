import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { useCookies } from 'vue3-cookies'
const { cookies } = useCookies()

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: () => {
      if(!cookies.get('theUser')){
        router.push({name: 'login'})
      }
    }
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
    path: '/cart',
    name: 'cart',
    component: () => import('../views/CartView.vue')
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
    path: '/login',
    name: 'login',
    component: () => import('../views/loginView.vue')
  },
  {
    path: '/userprofile',
    name: 'userprofile',
    props: true,
    component: () => import( '../views/userProfileView.vue')  
  },

  {
    path: '/single/:id',
    name: 'single',
    props: true,
    component: () => import( '../views/SingleView.vue')
  },
  {
    path: '/special',
    name: 'special',
    component: () => import( '../views/SpecialView.vue') 
  },
  {
    path: '/glazed',
    name: 'glazed',
    component: () => import( '../views/GlazedView.vue') 
  },
  {
    path: '/cake',
    name: 'cake',
    component: () => import( '../views/CakeView.vue') 
  },
  {
    path: '/roll',
    name: 'roll',
    component: () => import( '../views/RollView.vue') 
  },
  {
    path: '/pocket',
    name: 'pocket',
    component: () => import( '../views/PocketView.vue') 
  },
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
