import { NavItem } from '@/interfaces/navItem'

const headerNavItems: NavItem[] = [
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
    text: 'Contact',
    subitems: [
      {
        route: 'mailto:patriciajuana@gmail.com',
        text: 'patriciajuana@gmail.com',
        target: '_blank',
        iconClass: 'fa-regular fa-envelope',
      },
      {
        route: 'https://www.linkedin.com/in/patrickpacana/',
        text: 'LinkedIn',
        target: '_blank',
        iconClass: 'fa-brands fa-linkedin',
      },
      {
        route: 'https://github.com/patriciajuana/frontend-portfolio',
        text: 'Github',
        target: '_blank',
        iconClass: 'fa-brands fa-github',
      },
    ],
  },
]

export default headerNavItems
