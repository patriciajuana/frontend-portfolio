const tagMapData: Record<string, string> = {
  'web-app': 'Web App',
  wordpress: 'WordPress',
  vue2: 'Vue 2',
  vue3: 'Vue 3',
  nodejs: 'NodeJS',
  angular10: 'Angular 10',
  php: 'PHP',
  'ui/ux': 'UI / UX',
}

export const tagMap = (tag: string) => {
  return tagMapData[tag] || tag
}
