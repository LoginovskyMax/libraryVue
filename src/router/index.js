import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/allBooks.vue'
import Gallery from '../views/allUsersBlock.vue'
import books from '../views/aboutBookPage.vue'
import UserPage from '../views/UserPage.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
   
  },
  {
    path: '/users:id',
    name: 'user',
    component: UserPage,
    props:true
  },
  {
    path: '/books:id',
    name: 'books',
    component: books,
    props:true
  },
  {
    path: '/gallery',
    name: 'gallery',
    component: Gallery
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/card-block.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
