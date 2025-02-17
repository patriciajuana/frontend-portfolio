import { PortfolioItemContent } from '@/interfaces/portfolioItemContent'

const portfolioItems: PortfolioItemContent[] = [
  //Web Apps
  {
    id: 'kyc-web-app',
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
                      <li>Vue3</li>
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
    tags: ['vue3', 'developer', 'designer'],
    cardTags: ['web-app', 'vue3', 'nodejs', 'express'],
    images: {
      featured: {
        src: 'featured-kyc-web-app.jpg',
      },
      single: {
        src: 'single-kyc-web-app.jpg',
        alt: 'test',
      },
      card: {
        src: 'card-kyc-web-app.jpg',
      },
      gallery: [
        {
          src: 'gallery-kyc-web-app.jpg',
        },
      ],
    },
  },
  {
    id: 'kyc-admin',
    heading: 'KYC Admin',
    subheading: 'Identity Verification',
    description: `
                  <p>
                    A powerful admin dashboard designed to manage users, clients, and KYC API
                    integrations efficiently. The platform enables seamless administration of
                    identity verification services while providing insights into API performance
                    and usage.
                  </p>

                  <p>Key features include:</p>

                  <ul>  
                      <li><strong>User Management</strong> – Manage admin and client accounts with role-based access control.</li>
                      <li><strong>Multi-Client Management</strong> – Support multiple businesses with separate KYC configurations.</li>
                      <li><strong>KYC Settings</strong> – Configure API sources such as liveness detection, OCR, and face comparison.</li>
                      <li><strong>API Source Testing</strong> – Verify the functionality of integrated KYC services before deployment.</li>
                      <li><strong>Telemetry & Analytics</strong> – Monitor API usage patterns and track performance metrics. API</li>
                      <li><strong>Usage Logs</strong> – Maintain detailed logs of API interactions for auditing and compliance.</li>  
                  </ul>
                  `,
    details: [
      {
        heading: 'Company:',
        content: 'Institute for Machine Learning GmbH',
      },
      {
        heading: 'Frontend Framework & Tools:',
        content: `  <ul>
                      <li>Angular 10</li>
                      <li>Material UI</li>
                    </ul>`,
      },
      {
        heading: 'Middleware Tech Stack:',
        content: `  <ul>
                      <li>NodeJS / Express</li>                      
                      <li>Docker / PM2</li>
                    </ul>`,
      },
    ],
    tags: ['angular10', 'developer', 'designer'],
    cardTags: ['web-app', 'angular10', 'nodejs', 'express'],
    images: {
      single: {
        src: 'single-kyc-admin.jpg',
        alt: 'test',
      },
      card: {
        src: 'card-kyc-admin.jpg',
      },
      gallery: [
        {
          src: 'gallery-kyc-admin.jpg',
        },
      ],
    },
  },
  {
    id: 'radium',
    heading: 'Radium',
    subheading: 'High-speed AI training and deployment',
    description: `
                  <p>Developed and designed the frontend platform for an advanced AI cloud service, enabling users to seamlessly manage their AI projects and infrastructure.</p> 
                  <p>The platform features:</p>
                  <ul>
                      <li>Login and Email Verification: Secure user authentication and email confirmation for account setup.</li>
                      <li>Project Creation: Intuitive project creation and management interface to organize and launch AI models.</li>
                      <li>Server Management: Robust tools to manage AI server resources, monitor performance, and optimize usage.</li>
                      <li>Telemetry for Storage Network: Real-time telemetry to track storage network performance and usage.</li>
                      <li>User Management: Advanced role-based access control with customizable permissions for different user roles.</li>
                      <li>Profile/Account Management: User-friendly profile settings to manage account details and preferences.</li>
                  </ul>
                  `,
    links: [
      {
        href: 'https://www.radium.cloud/',
        text: 'Visit the Website',
        target: '_blank',
      },
    ],
    details: [
      {
        heading: 'Client:',
        content: 'Halex (via Disruptive Art Studio)',
      },
      {
        heading: 'Frontend Framework & Tools:',
        content: `  <ul>
                      <li>Vue 3</li>
                      <li>Element Plus UI</li>
                      <li>Axios</li>
                    </ul>`,
      },
      {
        heading: 'Backend Integration Stack:',
        content: `  <ul>
                      <li>.NET</li>
                      <li>Docker</li>
                    </ul>`,
      },
    ],
    tags: ['Vue3', 'developer', 'designer'],
    cardTags: ['web-app', 'vue3', 'nodejs', 'express'],
    images: {
      single: {
        src: 'single-radium.jpg',
      },
      card: {
        src: 'card-radium.jpg',
      },
      gallery: [
        {
          src: 'gallery-radium.jpg',
        },
      ],
    },
  },
  //WordPress
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
    ],
    details: [
      {
        heading: 'Client:',
        content: 'Blackhawk Tire (via Disruptive Art Studio)',
      },
      {
        heading: 'Frontend Framework & Tools:',
        content: `  <ul>
                      <li>Wordpress / PHP</li>
                      <li>Vue 2 — Tire Finder Widget</li>
                      <li>Bootstrap / SCSS</li>
                      <li>Docker</li>
                    </ul>`,
      },
      {
        heading: 'Design Tools:',
        content: `  <ul>
                      <li>Figma</li>
                      <li>Photoshop / Illustrator</li>                      
                    </ul>`,
      },
    ],
    cardTags: ['wordpress', 'php', 'vue2', 'docker'],
    images: {
      featured: {
        src: 'featured-blackhawk-tire-website.jpg',
      },
      single: {
        src: 'single-blackhawk-tire-website.jpg',
      },
      card: {
        src: 'card-blackhawk-tire-website.jpg',
      },
      gallery: [
        {
          src: 'gallery-blackhawk-tire-website.jpg',
        },
      ],
    },
  },
  //Design
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
    cardTags: ['Design'],
    image: 'portfolio-preview-album.jpg',
    imageAlt: '',
    cardImage: 'portfolio-preview-album.jpg',
    cardImageAlt: '',
    images: {
      featured: {
        src: 'featured-blackhawk-tire-website.jpg',
      },
      single: {
        src: 'single-radium.jpg',
      },
      card: {
        src: 'card-radium.jpg',
      },
      gallery: [
        {
          src: 'gallery-radium.jpg',
        },
      ],
    },
  },
]

export default portfolioItems
