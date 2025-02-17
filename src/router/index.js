import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioList from '@/views/PortfolioList.vue'
import PortfolioView from '@/views/PortfolioView.vue'

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
      path: '/portfolios/:filterBy?',
      name: 'portfolios',
      component: PortfolioList,
      props: (route) => ({
        filterBy: route.params.filterBy,
        filters: ['web-app', 'wordpress', 'design'],
      }),
    },
    //Web Apps
    {
      path: '/:id(kyc-web-app|kyc-admin|radium)',
      name: 'web-apps-portfolio',
      component: PortfolioView,
      props: (route) => ({ id: route.params.id }),
    },
    //WordPress
    {
      path: '/:id(blackhawk-tire-website|sailun-tire-website|cypressfuneral-website|magiline-website)',
      name: 'wordpress-portfolio',
      component: PortfolioView,
      props: (route) => ({ id: route.params.id }),
    },
    //Design
    {
      path: '/:id(album-release-package|restaurant-menu|technical-drawing|movie-poster|mobile-app)',
      name: 'design-portfolio',
      component: PortfolioView,
      props: (route) => ({ id: route.params.id }),
    },
  ],
})

export default router
