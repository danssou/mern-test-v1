import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // for dev
  server: {
    proxy:{
      "/api":{
        target:"http://localhost:5000",
      },
      watch: {
      usePolling: true,
    },
    },
    port: 8000,
  },
})
