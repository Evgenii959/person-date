import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  base: '/person-date/',
  build: {
    outDir: 'dist',
  },
});