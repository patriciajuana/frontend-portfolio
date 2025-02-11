import type { HeaderNavItem } from '@/components/Header.vue'

const headerNavItems: HeaderNavItem[] = [
  {
    route: '/web-apps',
    text: 'Web Apps',
    subitems: [
      {
        route: '/kyc-web-app',
        text: 'KYC Web App',
      },
    ],
  },
  {
    route: '/wordpress',
    text: 'WordPress',
  },
  {
    route: '/design',
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
