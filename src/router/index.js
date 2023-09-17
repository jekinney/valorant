import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue')
    },
    {
      path: '/player-cards',
      name: 'player-cards-all',
      component: () => import('../views/playerCards/List.vue')
    },
    {
      path: '/player-cards/show',
      name: 'player-cards-show',
      props: true,
      component: () => import('../views/playerCards/Show.vue')
    }
  ]
})

export default router
