import { PortfolioItemContent } from '@/components/PortfolioItem.vue'

const portfolioItems: PortfolioItemContent[] = [
  {
    modifier: 'portfolio-item--reverse portfolio-item--dark',
    heading: 'KYC Web App',
    subheading: 'Identity Verification',
    description: `Designed and developed a secure identity verification platform that performs liveness detection, matches selfies with ID documents, and verifies age for compliance and fraud prevention.`,
    details: [
      {
        heading: 'Client:',
        content: 'Progeny',
      },
      {
        heading: 'Frontend Tech Stack:',
        content: `  <ul>
                      <li>Vue3</li>
                      <li>Pinia</li>
                      <li>Vuetify</li>
                      <li>Axios</li>
                    </ul>`,
      },
      {
        heading: 'Middleware Tech Stack:',
        content: `  <ul>
                      <li>NodeJS</li>
                      <li>Express</li>
                      <li>MySQL</li>
                      <li>Sharp</li>
                    </ul>`,
      },
      {
        heading: 'Middleware Tech Stack:',
        content: `  <ul>
                      <li>NodeJS</li>
                      <li>Express</li>
                      <li>MySQL</li>
                      <li>Sharp</li>
                    </ul>`,
      },
    ],
    tags: ['developer', 'designer'],
    image: 'portfolio-preview-kyc.jpg',
    imageAlt: '',
    cta: [
      {
        buttonModifier: 'btn-secondary',
        route: '/',
        text: 'Details',
      },
      {
        route: '/',
        text: 'More Web App Portfolios <i class="fas fa-long-arrow-alt-right"></i>',
      },
    ],
    isFeatured: true,
  },
  {
    modifier: '',
    heading: 'Blackhawk Tire Website',
    subheading: 'Passenger Tires',
    description: `Designed and developed a refreshed and modernized WordPress website for Blackhawk Tire, designed to enhance user experience and brand identity. This redesign improves navigation, performance, and responsiveness while maintaining a sleek, professional look.`,
    link: {
      href: 'https://blackhawktirecanada.ca/en-ca/plt/',
      text: 'Visit the Website',
      target: '_blank',
    },
    details: [
      {
        heading: 'Client:',
        content: 'Blackhawk Tire (via Disruptive Art Studio)',
      },
      {
        heading: 'Tech Stack:',
        content: `  <ul>
                      <li>Wordpress</li>                      
                    </ul>`,
      },
    ],
    tags: ['developer', 'designer'],
    image: 'portfolio-preview-bh.jpg',
    imageAlt: '',
    cta: [
      {
        buttonModifier: 'btn-secondary',
        route: '/',
        text: 'Details',
      },
      {
        route: '/',
        text: 'More WordPress Portfolios <i class="fas fa-long-arrow-alt-right"></i>',
      },
    ],
    isFeatured: true,
  },
]

export default portfolioItems
