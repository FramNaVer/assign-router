import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import shop1 from '../views/shop1.vue'
import shop2 from '../views/shop2.vue'
import shop3 from '../views/shop3.vue'
import shop4 from '../views/shop4.vue'
import shop5 from '../views/shop5.vue'
import shop6 from '../views/shop6.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/shop1',
      name: 'shop1',
      component: shop1
    },
    {
      path: '/shop2',
      name: 'shop2',
      component: shop2
    },
    {
      path: '/shop3',
      name: 'shop3',
      component: shop3
    },
    {
      path: '/shop4',
      name: 'shop4',
      component: shop4
    },
    {
      path: '/shop5',
      name: 'shop5',
      component: shop5
    },
    {
      path: '/shop6',
      name: 'shop6',
      component: shop6
    },
  ]
})

export default router
