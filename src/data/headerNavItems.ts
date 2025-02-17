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
    ],
  },
  {
    route: { name: 'portfolios', params: { filterBy: 'design' } },
    text: 'Design',
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
