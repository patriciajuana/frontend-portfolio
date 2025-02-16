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
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      //component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/web-app-portfolios',
      name: 'web-app-portfolios',
      component: () => import('../views/PortfolioList.vue'),
      props: (route) => ({
        id: route.name,
        filters: ['Web App', 'WordPress', 'Design'],
      }),
    },
    {
      path: '/kyc-web-app',
      name: 'kyc-web-app',
      component: () => import('../views/PortfolioView.vue'),
      props: (route) => ({ id: route.name }),
    },
    {
      path: '/kyc-admin',
      name: 'kyc-admin',
      component: () => import('../views/PortfolioView.vue'),
      props: (route) => ({ id: route.name }),
    },
    {
      path: '/radium',
      name: 'radium',
      component: () => import('../views/PortfolioView.vue'),
      props: (route) => ({ id: route.name }),
    },
    {
      path: '/blackhawk-tire-website',
      name: 'blackhawk-tire-website',
      component: () => import('../views/PortfolioView.vue'),
      props: (route) => ({ id: route.name }),
    },
    {
      path: '/album-release-package',
      name: 'album-release-package',
      component: () => import('../views/PortfolioView.vue'),
      props: (route) => ({ id: route.name }),
    },
  ],
})

export default router
