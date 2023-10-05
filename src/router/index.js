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
      name: 'player-cards-list',
      component: () => import('../views/playerCards/List.vue')
    },
    {
      path: '/player-cards/show/:cardId',
      name: 'player-cards-show',
      component: () => import('../views/playerCards/Show.vue')
    },
    {
      path: '/weapons',
      name: 'weapons-list',
      component: () => import('../views/weapons/List.vue')
    },
    {
      path: '/weapons/show/:weaponId',
      name: 'weapons-show',
      component: () => import('../views/weapons/Show.vue')
    },
    {
      path: '/skins',
      name:'skins-list',
      component: () => import('../views/skins/List.vue')
    },
    {
      path: '/skins/show/:skinId',
      name:'skins-show',
      component: () => import('../views/skins/Show.vue')
    }
  ]
})

export default router
