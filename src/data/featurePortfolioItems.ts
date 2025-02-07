import { PortfolioItemContent } from '@/components/PortfolioItem.vue'

const portfolioItems: PortfolioItemContent[] = [
  {
    modifier: 'portfolio-item--reverse portfolio-item--dark',
    heading: 'KYC Web App',
    subheading: 'Identity Verification',
    description: `<p>Designed and developed a secure identity verification platform that performs liveness detection, matches selfies with ID documents, and verifies age for compliance and fraud prevention.</p>`,
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
    description: `<p>Designed and developed a refreshed and modernized WordPress website for Blackhawk Tire, designed to enhance user experience and brand identity. This redesign improves navigation, performance, and responsiveness while maintaining a sleek, professional look.</p>`,
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
  {
    modifier: 'portfolio-item--reverse portfolio-item--dark',
    heading: 'Album Release Package',
    subheading: 'theworldisnotround',
    description: `
                  <p>This project contribute to the official launch of my friend's third music album called "•••". The art style explores ideas of vintage, hazy, misty, surreal, ethereal or dream-like atmospheric elements, landscapes and textures. </p>
                  <p>The band characterizes their as a feeling of tearing up while standing on a beach at around 4 pm, with impending rain clouds approaching, and this concept has undoubtedly been taken into account when creating the visuals.</p>`,
    link: {
      href: 'https://patriciajuana.github.io/theworldisnotround/',
      text: 'Visit the Website',
      target: '_blank',
    },
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
                      <li>Website Design</li>
                      <li>Website Development</li>
                    </ul>`,
      },
      {
        heading: 'Tools:',
        content: `  <ul>
                      <li>InDesign</li>
                      <li>Illustrator</li>
                      <li>Photoshop</li>                      
                    </ul>`,
      },
    ],
    tags: ['developer', 'designer', 'ideation', 'composite'],
    image: 'portfolio-preview-album.jpg',
    imageAlt: '',
    cta: [
      {
        buttonModifier: 'btn-secondary',
        route: '/',
        text: 'Details',
      },
      {
        route: '/',
        text: 'More Design Portfolios <i class="fas fa-long-arrow-alt-right"></i>',
      },
    ],
    isFeatured: true,
  },
]

export default portfolioItems
