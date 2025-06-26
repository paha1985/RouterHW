import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react({
    jsxRuntime: 'classic', // для более понятных ошибок
    fastRefresh: true,
    overlay: true // включает overlay с ошибками
  })],
})
