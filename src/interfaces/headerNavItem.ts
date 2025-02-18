export interface HeaderNavItem {
  text: string
  route?: string | { name: string; params?: Record<string, any> }
  href?: string
  subitems?: HeaderNavItem[]
}
