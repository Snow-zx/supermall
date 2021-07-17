import { createRouter, createWebHistory } from 'vue-router'

const Home = ()=>import('views/home/Home.vue')
const Categories = () => import('views/categories/Categories.vue')
const Shop = () => import('views/shop/Shop.vue')
const Profile = () => import('views/profile/Profile')

const routes = [
  {
    path:'/',
    redirect: '/home'
  },
  {
    path:'/home',
    component: Home
  },
  {
    path:'/categories',
    component: Categories
  },
  {
    path:'/shop',
    component: Shop
  },
  {
    path: '/profile',
    component: Profile
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
