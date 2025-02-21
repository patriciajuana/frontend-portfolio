import purgecssModule from '@fullhuman/postcss-purgecss'

const purgecss = purgecssModule.default || purgecssModule

export default {
  plugins: [
    purgecss({
      content: ['./index.html', './src/**/*.vue'],
      defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    }),
  ],
}
