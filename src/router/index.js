import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/news',
      name: 'news',
      component: () => import('../views/NewsView.vue')
    },
    {
      path: '/business',
      name: 'business',
      component: () => import('../views/BusinessView.vue')
    },
    {
      path: '/culture',
      name: 'culture',
      component: () => import('../views/CultureView.vue')
    }
  ]
})

export default router
