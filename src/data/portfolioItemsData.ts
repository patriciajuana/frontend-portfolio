import { PortfolioItemContent } from '@/interfaces/portfolioItemContent'

const portfolioItems: PortfolioItemContent[] = [
  {
    id: 'kyc-web-app',
    modifier: 'portfolio-item--reverse portfolio-item--dark',
    heading: 'KYC Web App',
    subheading: 'Identity Verification',
    description: `
                  <p>Built a secure identity verification web app to showcase and market their SaaS KYC API solutions. The platform features liveness detection, selfie-to-ID verification, and age validation, allowing potential clients to interact with the technology firsthand.</p>
                  <p>Developed using Vue 3 and Vuetify for the frontend and Node.js/Express with MySQL for the backend, it delivers a smooth user experience while highlighting the company's advanced identity verification capabilities.</p>`,
    details: [
      {
        heading: 'Company:',
        content: 'Institute for Machine Learning GmbH',
      },
      {
        heading: 'Frontend Framework & Tools:',
        content: `  <ul>
                      <li>Vue 3</li>
                      <li>Vuetify</li>
                      <li>Pinia</li>                      
                      <li>Axios</li>
                    </ul>`,
      },
      {
        heading: 'Middleware Tech Stack:',
        content: `  <ul>
                      <li>NodeJS / Express / JWT</li>
                      <li>Sharp</li>
                      <li>MySQL / Sequelize</li>
                    </ul>`,
      },
    ],
    tags: ['developer', 'designer'],
    cardTags: ['Vue3', 'NodeJS', 'Express'],
    image: 'portfolio-preview-kyc.jpg',
    imageAlt: '',
    cardImage: 'portfolio-preview-kyc.jpg',
    cardImageAlt: '',
    images: {
      featured: {
        src: 'portfolio-preview-kyc.jpg',
      },
      single: {
        src: 'single-kyc-web-app.jpg',
        alt: 'test',
      },
      card: {
        src: 'gallery-kyc-web-app-1.jpg',
      },
      gallery: [
        {
          src: 'gallery-kyc-web-app.jpg',
        },
      ],
    },
  },
  {
    id: 'blackhawk-tire-website',
    modifier: '',
    heading: 'Blackhawk Tire Website',
    subheading: 'Passenger Tires',
    description: `<p>Designed and developed a refreshed and modernized WordPress website for Blackhawk Tire, designed to enhance user experience and brand identity. This redesign improves navigation, performance, and responsiveness while maintaining a sleek, professional look.</p>`,
    links: [
      {
        href: 'https://blackhawktirecanada.ca/en-ca/plt/',
        text: 'Visit the Website',
        target: '_blank',
      },
      {
        href: 'https://blackhawktirecanada.ca/en-ca/plt/',
        text: 'Visit the Website',
        target: '_blank',
      },
    ],
    details: [
      {
        heading: 'Client:',
        content: 'Blackhawk Tire (via Disruptive Art Studio)',
      },
      {
        heading: 'Highlighted Tech Stack:',
        content: `  <ul>
                      <li>Wordpress</li>
                      <li>Vue2</li>
                      <li>Bootstrap</li>
                      <li>Docker</li>
                    </ul>`,
      },
    ],
    tags: ['developer', 'designer'],
    cardTags: ['WordPress', 'Vue2', 'Docker'],
    image: 'portfolio-preview-bh.jpg',
    imageAlt: '',
    cardImage: 'portfolio-preview-bh.jpg',
    cardImageAlt: '',
  },
  {
    id: 'album-release-package',
    modifier: 'portfolio-item--reverse portfolio-item--dark',
    heading: 'Album Release Package',
    subheading: 'theworldisnotround',
    description: `
                  <p>This project contribute to the official launch of my friend's third music album called "•••". The art style explores ideas of vintage, hazy, misty, surreal, ethereal or dream-like atmospheric elements, landscapes and textures. </p>
                  <p>The band characterizes their as a feeling of tearing up while standing on a beach at around 4 pm, with impending rain clouds approaching, and this concept has undoubtedly been taken into account when creating the visuals.</p>`,
    links: [
      {
        href: 'https://patriciajuana.github.io/theworldisnotround/',
        text: 'Visit the Website',
        target: '_blank',
      },
    ],
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
    cardImage: 'portfolio-preview-album.jpg',
    cardImageAlt: '',
  },
]

export default portfolioItems
