import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import checker from "vite-plugin-checker";

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    checker({
      typescript: true, // Проверка TypeScript
      eslint: {
        lintCommand: 'eslint "./src/**/*.{js,jsx,ts,tsx}"', // Проверка ESLint
      },
    }),
  ],
  server: {
    port: 3000, // Порт разработки (как в CRA)
    open: true, // Автоматически открывать браузер
  },
});
