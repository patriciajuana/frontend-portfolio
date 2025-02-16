export default [
  {
    id: 'kyc-web-app',
    modifiers: 'portfolio-item--reverse portfolio-item--dark',
    moreCTA: {
      route: { name: 'portfolios', params: { filterBy: 'web-app' } },
      text: 'More Web App Portfolios',
    },
  },
  {
    id: 'blackhawk-tire-website',
    moreCTA: {
      route: { name: 'portfolios', params: { filterBy: 'wordpress' } },
      text: 'More Wordpress Portfolios',
    },
  },
  {
    id: 'album-release-package',
    modifiers: 'portfolio-item--reverse portfolio-item--dark',
    moreCTA: {
      route: { name: 'portfolios', params: { filterBy: 'design' } },
      text: 'More Design Portfolios',
    },
  },
]
