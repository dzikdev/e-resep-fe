import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/list-prescription/:patient_id',
      name: 'list_prescription',
      component: () => import('../views/ListPrescription.vue')
    }
  ]
})

export default router
