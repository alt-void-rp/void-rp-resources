import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//import vueDevTools from 'vite-plugin-vue-devtools'
import fs from 'fs'

export default defineConfig({
  plugins: [
    vue(),
    //vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    allowedHosts: ['resources.void-rp.ru', 'void-rp.ru'],
    https: {
      key: fs.readFileSync('ssl/privkey.pem'),
      cert: fs.readFileSync('ssl/fullchain.pem')
    }
  },
  hmr: {
    host: 'void-rp.ru', // ← ключевая настройка!
    protocol: 'wss',
    port: 3000,
    clientPort: 3000, // ← порт, который клиент будет использовать
  }
})