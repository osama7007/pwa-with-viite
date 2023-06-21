import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({  
  plugins: [  
  VitePWA({  
      registerType: 'prompt',  
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],  
      manifest: {  
  name: 'pwa_example',  
        short_name: 'pwa_ex',  
        description: 'pwa example with vite plugin',  
        theme_color: '#ffffff',  
        start_url: '/',  
        icons: [  
  {  
  src: 'android-chrome-192x192.png',  
            sizes: '192x192',  
            type: 'image/png',  
          },  
          {  
  src: 'android-chrome-512x512.png',  
            sizes: '512x512',  
            type: 'image/png',  
          },  
          {  
  src: 'android-chrome-512x512.png',  
            sizes: '512x512',  
            type: 'image/png',  
            purpose: 'any maskable',  
          },  
        ],  
      },  
    }),  
  ],  
});