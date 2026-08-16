import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  envPrefix: 'WEB3FORMS_',
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'react'
          }
          if (id.includes('node_modules/lottie-react') || id.includes('node_modules/lottie-web')) {
            return 'animations'
          }
          if (id.includes('node_modules/lucide-react')) {
            return 'icons'
          }
          return undefined
        },
      },
    },
  },
})