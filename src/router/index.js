import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/anmeldung',
    name: 'anmeldung',
    component: () => import('../views/AnmeldungView.vue')
  },
  {
    path: '/complete',
    name: 'complete',
    component: () => import('../views/CompleteView.vue')
  },
  {
    path: '/impressum+Datenschutz',
    name: 'impressum',
    component: () => import('../views/FooterInformationView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
