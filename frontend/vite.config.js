import path from "path";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import 'dotenv/config'

const API_URL = process.env.VITE_BACKEND_URL;
console.log('API_URL', API_URL);

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: true,
    proxy: {
      '/api': {
        target: API_URL,
        changeOrigin: true, // Para modificar el host origin
        secure: false, // Solo si tu backend no usa HTTPS
      },
      '/uploads': {
        target: API_URL,
        changeOrigin: true, // Para modificar el host origin
        secure: false, // Solo si tu backend no usa HTTPS
      },
    },
  },
});


