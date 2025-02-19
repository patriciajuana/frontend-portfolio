export interface NavItem {
  text: string
  route?: string | { name: string; params?: Record<string, any> }
  subitems?: NavItem[]
  iconClass?: string
  target?: string
}
