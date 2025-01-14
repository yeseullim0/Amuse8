import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ['**/*.jpg', '**/*.jpeg', '**/*.png'],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  plugins: [react()],
})
