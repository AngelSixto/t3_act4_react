import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // Nombre EXACTO del repositorio en GitHub (necesario para GitHub Pages)
  base: '/t3_act4_react/',
})
