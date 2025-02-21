import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioList from '@/views/PortfolioList.vue'
import PortfolioView from '@/views/PortfolioView.vue'

const listingFilters = ['web-app', 'wordpress', 'design']
const webApps = ['kyc-web-app', 'kyc-admin', 'radium']
const wordpress = [
  'blackhawk-tire-website',
  'sailun-tire-website',
  'cypressfuneral-website',
  'magiline-website',
]
const design = [
  'album-release-package',
  'restaurant-menu',
  'technical-drawing',
  'movie-poster',
  'mobile-app',
]
const singlePortfolios = [...webApps, ...wordpress, ...design]

export default createRouter({
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
        filters: listingFilters,
      }),
      beforeEnter: (to, from, next) => {
        if (listingFilters.includes(to.params.filterBy)) next()
        next({ name: 'home' })
      },
    },
    //Single Page
    {
      path: `/:id(${singlePortfolios.join('|')})`,
      name: 'single-portfolio',
      component: PortfolioView,
      props: (route) => ({ id: route.params.id }),
      beforeEnter: (to, from, next) => {
        if (singlePortfolios.includes(to.params.id)) next()
        next({ name: 'home' })
      },
    },
    {
      path: '/:pathMatch(.*)*', // Catch-all route for invalid paths
      name: 'home',
      component: HomeView,
    },
  ],
})
