import { defineConfig } from 'vite'

export default defineConfig({
  base: './', // esto asegura rutas relativas para Vercel
  build: {
    outDir: 'dist',
  },
  // otras configuraciones que tenías
})
