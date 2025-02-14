export interface PortfolioItemContent {
  id: string
  modifier?: string
  heading: string
  subheading: string
  description: string
  links?: {
    href: string
    text: string
    target?: string
  }[]
  details: {
    heading: string
    content: string
  }[]
  tags?: string[]
  cardTags?: string[]
  image: string
  imageAlt: string
  cardImage: string
  cardImageAlt: string
  images?: {
    featured?: {
      src: string
      alt?: string
    }
    single?: {
      src: string
      alt?: string
    }
    card?: {
      src: string
      alt?: string
    }
    gallery?: {
      src: string
      alt?: string
    }[]
  }
}
