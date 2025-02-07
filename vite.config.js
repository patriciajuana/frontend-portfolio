import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    //vueDevTools(),
    Components({
      dirs: ['src/components'], // Auto-import components from this folder
      extensions: ['vue'], // Only consider .vue files
      deep: true, // Search subdirectories
      dts: 'src/components.d.ts', // TypeScript support for VSCode auto-import
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "${path.resolve(__dirname, 'src/styles/fonts.scss')}";
          @import "${path.resolve(__dirname, 'src/styles/vendor/bootstrap/bootstrap.scss')}";          
          @import "${path.resolve(__dirname, 'src/styles/ease.scss')}";
        `,
      },
    },
  },
})
