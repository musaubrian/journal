import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomePageView.vue'
import AddEntryView from "../views/AddEntryView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/entry',
      name: 'add_entry',
      component: AddEntryView
    }
  ]
})

export default router
