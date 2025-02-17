export default [
  {
    id: 'kyc-web-app',
    modifiers: 'portfolio-item--reverse portfolio-item--dark',
    catchHeading: 'Featured Web App Portfolio',
    moreCTA: {
      route: { name: 'portfolios', params: { filterBy: 'web-app' } },
      text: 'More Web App Portfolios',
    },
  },
  {
    id: 'blackhawk-tire-website',
    catchHeading: 'Featured WordPress Portfolio',
    moreCTA: {
      route: { name: 'portfolios', params: { filterBy: 'wordpress' } },
      text: 'More WordPress Portfolios',
    },
  },
  {
    id: 'album-release-package',
    modifiers: 'portfolio-item--reverse portfolio-item--dark',
    catchHeading: 'Featured Design Portfolio',
    moreCTA: {
      route: { name: 'portfolios', params: { filterBy: 'design' } },
      text: 'More Design Portfolios',
    },
  },
]
