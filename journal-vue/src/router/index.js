import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePageView.vue'
import AddEntryView from "../views/AddEntryView.vue";
import landingView from "../views/landingView.vue"
import signInView from "../views/signInView.vue"
import signUpView from "../views/signUpView.vue"

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
      name: 'landing',
      component: landingView
    },
    {
      path: '/signin',
      name: 'signin',
      component: signInView
    },
    {
      path: '/signup',
      name: 'signup',
      component: signUpView
    }
  ]
})

export default router