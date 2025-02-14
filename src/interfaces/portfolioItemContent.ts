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
  tags: string[]
  image: string
  imageAlt: string
  cardImage: string
  cardImageAlt: string
}
