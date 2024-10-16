import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/vCard4.0-QRCode-Generator/',
  build: {
    outDir: 'docs'
  }
})
