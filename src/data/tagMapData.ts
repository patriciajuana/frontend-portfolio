const tagMapData: Record<string, string> = {
  'web-app': 'Web App',
  wordpress: 'WordPress',
}

export const tagMap = (tag: string) => {
  return tagMapData[tag] || tag
}
