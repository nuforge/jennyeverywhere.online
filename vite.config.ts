//import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.md'], // Include .md files as assets
  plugins: [
    vue({ template: { compilerOptions: { isCustomElement: (tag) => tag === 'custom-tag' } } }),
  ],
  base: '/jennyeverywhere.online/',
  server: { port: 3000 },
  resolve: { alias: { '@': path.resolve(__dirname, 'src'), vue: 'vue/dist/vue.esm-bundler.js' } },
})
