export const resolveImagePath = (fileName: string) => {
  return new URL(`../assets/images/${fileName}`, import.meta.url).href
}
