import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioList from '@/views/PortfolioList.vue'
import PortfolioView from '@/views/PortfolioView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition // Restore scroll position when using browser back/forward
    } else {
      return { top: 0, behavior: 'smooth' } // Scroll to top on route change
    }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    //Listing Page
    {
      path: '/portfolios/:filterBy?',
      name: 'portfolios',
      component: PortfolioList,
      props: (route) => ({
        filterBy: route.params.filterBy,
        filters: ['web-app', 'wordpress', 'design'],
      }),
    },
    //Single Page Web Apps
    {
      path: '/:id(kyc-web-app|kyc-admin|radium)',
      name: 'web-apps-portfolio',
      component: PortfolioView,
      props: (route) => ({ id: route.params.id }),
    },
    //Single Page WordPress
    {
      path: '/:id(blackhawk-tire-website|sailun-tire-website|cypressfuneral-website|magiline-website)',
      name: 'wordpress-portfolio',
      component: PortfolioView,
      props: (route) => ({ id: route.params.id }),
    },
    //Single Page Design
    {
      path: '/:id(album-release-package|restaurant-menu|technical-drawing|movie-poster|mobile-app)',
      name: 'design-portfolio',
      component: PortfolioView,
      props: (route) => ({ id: route.params.id }),
    },
  ],
})

export default router
