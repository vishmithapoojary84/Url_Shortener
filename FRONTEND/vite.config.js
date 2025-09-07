import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  preview: {
    allowedHosts: [
      'url-shortener-frontend-3ly1.onrender.com' // your Render frontend URL
    ],
    port: process.env.PORT || 5173,
    host: '0.0.0.0'
  }
})
