import { PortfolioItemContent } from '@/components/PortfolioItem.vue'

const portfolioItems: PortfolioItemContent[] = [
  {
    modifier: 'portfolio-item--reverse portfolio-item--dark',
    heading: 'KYC Web App',
    subheading: 'Identity Verification',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. At nisi suscipit, quaerat,
            reiciendis optio illum consequuntur in est aliquam commodi recusandae, quibusdam itaque.
            Veritatis labore maxime expedita iste beatae aut.`,
    details: [
      {
        heading: 'Client:',
        content: 'Humber IGS (Graphics Design for Print and Web)',
      },
      {
        heading: 'Deliverables:',
        content: `  <ul>
                      <li>Branding and Merch</li>
                      <li>Vinyl album cover</li>
                      <li>Press Kit</li>
                      <li>Website</li>
                    </ul>`,
      },
    ],
    tags: ['test', 'test2'],
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
        text: 'Show more web apps',
      },
    ],
  },
  {
    modifier: '',
    heading: 'KYC Web App',
    subheading: 'Identity Verification',
    description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. At nisi suscipit, quaerat,
            reiciendis optio illum consequuntur in est aliquam commodi recusandae, quibusdam itaque.
            Veritatis labore maxime expedita iste beatae aut.`,
    details: [
      {
        heading: 'Client:',
        content: 'Humber IGS (Graphics Design for Print and Web)',
      },
      {
        heading: 'Deliverables:',
        content: `  <ul>
                      <li>Branding and Merch</li>
                      <li>Vinyl album cover</li>
                      <li>Press Kit</li>
                      <li>Website</li>
                    </ul>`,
      },
    ],
    tags: ['test', 'test2'],
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
        text: 'Show more web apps',
      },
    ],
  },
]

export default portfolioItems
