import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/water',
      name: 'water',
      component: () => import('../views/WaterView.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('../views/CartView.vue'),
    },
    {
      path: '/water/:detail',
      name: 'detail',
      component: () => import('../views/EmbassamentDetailView.vue'),
      props: route => ({ detail:route.params.detail }),
    }
  ],
})

export default router
