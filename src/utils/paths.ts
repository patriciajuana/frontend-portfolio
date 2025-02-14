export const resolveImagePath = (fileName?: string) => {
  if (!fileName) return ''
  return new URL(`../assets/images/${fileName}`, import.meta.url).href
}
