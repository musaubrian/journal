import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePageView.vue'
import AddEntryView from "../views/AddEntryView.vue";
import SignInView from "../views/SignInView.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/thoughts',
      name: 'home',
      component: HomeView
    },
    {
      path: '/entry',
      name: 'add_entry',
      component: AddEntryView
    },
    {
      path: '/',
      name: 'sign_in',
      component: SignInView
    }
  ]
})

export default router