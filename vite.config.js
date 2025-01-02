import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: './', // Asegura rutas relativas
  plugins: [
    vue(),
    VitePWA({
      manifest: {
        name: 'Gimnasio App',
        short_name: 'Gim',
        description: 'Una aplicación para gestionar rutinas de gimnasio.',
        theme_color: '#007bff',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: './index.html',
        icons: [
          {
            src: './images/icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: './images/icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      },
      registerType: 'autoUpdate', // Service Worker se actualiza automáticamente
      workbox: {
        globPatterns: ['**/*.{js,css,html,webp,png,jpg}'], // Archivos que se deben cachear
      }
    })
  ]
});
