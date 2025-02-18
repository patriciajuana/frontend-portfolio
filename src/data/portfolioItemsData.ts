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
    cardTags: ['web-app', 'vue3', 'nodejs', 'express', 'developer', 'designer'],
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
                      <li>NodeJS / Express / Express-Session</li>                      
                      <li>Docker / PM2</li>
                    </ul>`,
      },
    ],
    cardTags: ['web-app', 'angular10', 'nodejs', 'express', 'developer', 'designer'],
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
                      <li><strong>Login and Email Verification</strong>: Secure user authentication and email confirmation for account setup.</li>
                      <li><strong>Project Creation</strong>: Intuitive project creation and management interface to organize and launch AI models.</li>
                      <li><strong>Server Management</strong>: Robust tools to manage AI server resources, monitor performance, and optimize usage.</li>
                      <li><strong>Telemetry for Storage Network</strong>: Real-time telemetry to track storage network performance and usage.</li>
                      <li><strong>User Management</strong>: Advanced role-based access control with customizable permissions for different user roles.</li>
                      <li><strong>Profile/Account Management</strong>: User-friendly profile settings to manage account details and preferences.</li>
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
    heading: 'Blackhawk Tires',
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
        content: 'Blackhawk Tires (via Disruptive Art Studio)',
      },
      {
        heading: 'Frontend Framework & Tools:',
        content: `  <ul>
                      <li>Wordpress / PHP</li>
                      <li>Timber / Twig</li>
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
    cardTags: ['wordpress', 'php', 'vue2', 'docker', 'developer', 'designer'],
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
  {
    id: 'sailun-tire-website',
    modifier: '',
    heading: 'Sailun Tires',
    subheading: 'Passenger & Commercial Tires',
    description: `<p>Revamped and modernized the WordPress website for Sailun Tires, focusing on improved user experience and a stronger brand presence. The refresh enhances site navigation, boosts performance, and ensures seamless responsiveness, all while delivering a polished and professional design.</p>`,
    links: [
      {
        href: 'https://sailuntire.ca/en/plt/',
        text: 'Visit the Website',
        target: '_blank',
      },
    ],
    details: [
      {
        heading: 'Client:',
        content: 'Sailun Tires (via Disruptive Art Studio)',
      },
      {
        heading: 'Frontend Framework & Tools:',
        content: `  <ul>
                      <li>Wordpress / PHP</li>
                      <li>Timber / Twig</li>
                      <li>Vue 2 — Tire Finder Widget & Megamenu</li>
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
    cardTags: ['wordpress', 'php', 'vue2', 'docker', 'developer', 'designer'],
    images: {
      single: {
        src: 'single-sailun-tire-website.jpg',
      },
      card: {
        src: 'card-sailun-tire-website.jpg',
      },
      gallery: [
        {
          src: 'gallery-sailun-tire-website.jpg',
        },
      ],
    },
  },
  {
    id: 'cypressfuneral-website',
    modifier: '',
    heading: 'Cypress Funeral',
    subheading: 'Funeral & Cremation Services',
    description: `
                  <p>Developed as a fully custom WordPress website, built entirely from scratch to ensure a seamless and intuitive experience. The project involved creating a structured, scalable, and easily manageable site using Advanced Custom Fields (ACF) to drive dynamic components.</p>
                  <p>Key features of this project include:</p>
                  <ul>
                      <li><strong>Custom WordPress Development</strong> – Hand-coded for flexibility and performance.</li>
                      <li><strong>Multiple Post Types</strong> – Structured content for obituaries, services, and products.</li>
                      <li><strong>ACF-Driven Components</strong> – Modular and reusable sections for easy content updates.</li>
                      <li><strong>Site-Wide & Product Search</strong> – Implemented a robust search experience to enhance usability.</li>
                  </ul>
                `,
    links: [
      {
        href: 'https://cypressfuneral.ca/',
        text: 'Visit the Website',
        target: '_blank',
      },
    ],
    details: [
      {
        heading: 'Client:',
        content: 'Cypress Funeral (via Sproing Creative)',
      },
      {
        heading: 'Frontend Tools:',
        content: `  <ul>
                      <li>Wordpress / PHP</li>                      
                      <li>Bootstrap / SCSS</li>
                      <li>Gulp</li>
                    </ul>`,
      },
    ],
    cardTags: ['wordpress', 'php', 'developer'],
    images: {
      single: {
        src: 'single-cypressfuneral-website.jpg',
      },
      card: {
        src: 'card-cypressfuneral-website.jpg',
      },
      gallery: [
        {
          src: 'gallery-cypressfuneral-website.jpg',
        },
      ],
    },
  },
  {
    id: 'magiline-website',
    modifier: '',
    heading: 'Magiline Japan',
    subheading: 'Piscines Magiline French Pools',
    description: `
                  <p>Developed as a fully custom WordPress website, built from scratch to highlight their exclusive range of Piscines Magiline pools. The website features interactive animations and parallax effects to create an engaging and immersive experience.</p>
                  <p>Key features of this project include:</p>
                  <ul>
                      <li><strong>Custom WordPress Development</strong> – Hand-coded for flexibility and performance.</li>                      
                      <li><strong>ACF-Driven Components</strong> – Used to create dynamic, reusable components.</li>
                      <li><strong>Interactive Animating Pool</strong> – An animated and interactive element allowing users to visualize different pool options.</li>
                      <li><strong>Parallax Effects</strong> – Engaging scrolling animations that add depth and interactivity to the user experience.</li>
                  </ul>
                `,
    links: [
      {
        href: 'https://magiline.jp/',
        text: 'Visit the Website',
        target: '_blank',
      },
    ],
    details: [
      {
        heading: 'Client:',
        content: 'Magiline Japan (via LIG)',
      },
      {
        heading: 'Frontend Tools:',
        content: `  <ul>
                      <li>Wordpress / PHP</li>
                      <li>SCSS / GSAP / JQuery</li>
                      <li>Docker</li>
                    </ul>`,
      },
    ],
    cardTags: ['wordpress', 'php', 'developer'],
    images: {
      single: {
        src: 'single-magiline-website.jpg',
      },
      card: {
        src: 'card-magiline-website.jpg',
      },
      gallery: [
        {
          src: 'gallery-magiline-website.jpg',
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
                      <li>HTML5 / AOS / Bootstrap</li>
                    </ul>`,
      },
    ],
    cardTags: ['design', 'ideation', 'composite', 'developer'],
    images: {
      featured: {
        src: 'featured-album-release.jpg',
      },
      single: {
        src: 'single-album-release.jpg',
      },
      card: {
        src: 'card-album-release.jpg',
      },
      gallery: [
        {
          src: 'gallery-album-release.jpg',
        },
      ],
    },
  },
  {
    id: 'restaurant-menu',
    heading: 'Dining Menu',
    subheading: 'Japanese Cuisine',
    description: `
                  <p>Since the objective of the menu is to contribute to the dining experience, I opted for a Japanese restaurant concept since I felt I had different rooms for play; to either lean towards the bold and assertive side of Japanese culture or the clean and orderly. The final design uses both contrasts of minimalism and order; and the unpredictability of Japanese calligraphy swishes.</p>`,
    details: [
      {
        heading: 'Client:',
        content: 'Humber IGS (Graphics Design for Print and Web)',
      },
      {
        heading: 'Deliverables:',
        content: `  <ul>
                      <li>Menu Design</li>
                      <li>Mockups</li>
                      <li>Press and Digital PDFs</li>
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
    cardTags: ['design', 'creative', 'typography', 'technical'],
    images: {
      featured: {
        src: 'featured-restaurant-menu.jpg',
      },
      single: {
        src: 'single-restaurant-menu.jpg',
      },
      card: {
        src: 'card-restaurant-menu.jpg',
      },
      gallery: [
        {
          src: 'gallery-restaurant-menu.jpg',
        },
      ],
    },
  },
  {
    id: 'technical-drawing',
    heading: 'Technical Drawing',
    subheading: 'Coffee Maker',
    description: `
                  <p>In this project, I took on the challenge of vectorizing a complex device that involved a minimum of three materials—plastic, steel, and glass. The main objective was to thoroughly refine my proficiency in using the gradient mesh tool and effective use of 3D materials in Illustrator.</p>`,
    details: [
      {
        heading: 'Client:',
        content: 'Humber IGS (Graphics Design for Print and Web)',
      },
      {
        heading: 'Deliverables:',
        content: `  <ul>
                      <li>Vector execution of electronic device</li>
                      <li>AD Design</li>
                    </ul>`,
      },
      {
        heading: 'Tools:',
        content: `  <ul>                      
                      <li>Illustrator</li>                    
                    </ul>`,
      },
    ],
    cardTags: ['design', 'technical', 'workflow', 'typography'],
    images: {
      featured: {
        src: 'featured-technical-drawing.jpg',
      },
      single: {
        src: 'single-technical-drawing.jpg',
      },
      card: {
        src: 'card-technical-drawing.jpg',
      },
      gallery: [
        {
          src: 'gallery-technical-drawing.jpg',
        },
      ],
    },
  },
  {
    id: 'movie-poster',
    heading: 'Movie Poster',
    subheading: 'Interstellar',
    description: `
                  <p>For this project, I opted to use the movie “Interstellar” as the subject because space objects offer ample opportunities to explore colors, light bending, shadows, and a plethora of other cosmic-related effects. This gives me the freedom to experiment extensively with different filters, blend modes, and various compositing effects. To create the basic black hole effect, I twirled a cluster of dots in a circular motion, and then added various distortions and lighting effects to achieve the desired look.</p>`,
    details: [
      {
        heading: 'Client:',
        content: 'Humber IGS (Graphics Design for Print and Web)',
      },
      {
        heading: 'Deliverables:',
        content: `  <ul>
                      <li>Poster Design</li>
                    </ul>`,
      },
      {
        heading: 'Tools:',
        content: `  <ul>                      
                      <li>Photoshop</li>                    
                    </ul>`,
      },
    ],
    cardTags: ['design', 'composite', 'creative', 'technical'],
    images: {
      featured: {
        src: 'featured-movie-poster.jpg',
      },
      single: {
        src: 'single-movie-poster.jpg',
      },
      card: {
        src: 'card-movie-poster.jpg',
      },
      gallery: [
        {
          src: 'gallery-movie-poster.jpg',
        },
      ],
    },
  },
  {
    id: 'mobile-app',
    heading: 'Mobile App',
    subheading: 'Elderly Dating',
    description: `
                  <p>This project was a duo collaborative effort, showcasing effective planning and teamwork. The outcome is an application tailored for senior citizens, functioning as a dating platform. Our vision is to create a trusted and empowering space for seniors, where they can connect with like-minded individuals, forge meaningful relationships, and rediscover love in a safe and secure environment.</p>`,
    links: [
      {
        href: 'https://xd.adobe.com/view/2eb35dd4-1286-437c-bfc2-a8c37bd4affe-7be0/',
        text: 'Try out the Prototype',
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
                      <li>High fidelity app prototype</li>
                      <li>Sitemap & wireframes</li>
                      <li>Research document</li>
                    </ul>`,
      },
      {
        heading: 'Tools:',
        content: `  <ul>                      
                      <li>XD</li>
                      <li>Illustrator</li>
                      <li>Photoshop</li>
                      <li>InDesign</li>
                    </ul>`,
      },
    ],
    cardTags: ['design', 'ui/ux', 'prototyping', 'ideation'],
    images: {
      featured: {
        src: 'featured-mobile-app.jpg',
      },
      single: {
        src: 'single-mobile-app.jpg',
      },
      card: {
        src: 'card-mobile-app.jpg',
      },
      gallery: [
        {
          src: 'gallery-mobile-app.jpg',
        },
      ],
    },
  },
]

export default portfolioItems
