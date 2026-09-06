import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// base не зашит в конфиг: при деплое на GitHub Pages workflow передаёт его
// флагом --base=/<имя-репозитория>/, поэтому конфиг не нужно править
// при переименовании репозитория. Локально и в preview используется '/'.
export default defineConfig({
  plugins: [react()],
});
