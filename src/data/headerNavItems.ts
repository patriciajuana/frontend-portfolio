import type { HeaderNavItem } from '@/components/Header.vue'

const headerNavItems: HeaderNavItem[] = [
  {
    route: { name: 'portfolios', params: { filterBy: 'web-app' } },
    text: 'Web Apps',
    subitems: [
      {
        route: '/kyc-web-app',
        text: 'KYC Web App',
      },
      {
        route: '/kyc-admin',
        text: 'KYC Admin',
      },
      {
        route: '/radium',
        text: 'Radium',
      },
    ],
  },
  {
    route: { name: 'portfolios', params: { filterBy: 'wordpress' } },
    text: 'WordPress',
    subitems: [
      {
        route: '/blackhawk-tire-website',
        text: 'Blackhawk Tires',
      },
      {
        route: '/sailun-tire-website',
        text: 'Sailun Tires',
      },
      {
        route: '/cypressfuneral-website',
        text: 'Cypress Funeral',
      },
      {
        route: '/magiline-website',
        text: 'Magiline',
      },
    ],
  },
  {
    route: { name: 'portfolios', params: { filterBy: 'design' } },
    text: 'Design',
    subitems: [
      {
        route: '/album-release-package',
        text: 'Album Release Package',
      },
      {
        route: '/restaurant-menu',
        text: 'Restaurant Menu',
      },
      {
        route: '/technical-drawing',
        text: 'Technical Drawing',
      },
      {
        route: '/movie-poster',
        text: 'Movie Poster',
      },
      {
        route: '/mobile-app',
        text: 'Mobile App',
      },
    ],
  },
  {
    route: '/contact',
    text: 'Contact',
    subitems: [
      {
        href: 'mailto:patriciajuana@gmail.com',
        text: '<div class="d-flex align-items-center gap-1"><i class="fas fa-envelope"></i> patriciajuana@gmail.com</div>',
      },
      {
        href: 'mailto:patriciajuana@gmail.com',
        text: '<div class="d-flex align-items-center gap-1"><i class="fas fa-envelope"></i> patriciajuana@gmail.com</div>',
      },
      {
        href: 'mailto:patriciajuana@gmail.com',
        text: '<div class="d-flex align-items-center gap-1"><i class="fas fa-envelope"></i> patriciajuana@gmail.com</div>',
      },
    ],
  },
]

export default headerNavItems
