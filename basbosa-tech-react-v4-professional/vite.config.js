import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteSingleFile } from 'vite-plugin-singlefile';

// base './' + singlefile: نسخة المعاينة dist/index.html بتشتغل بضغطة
// دبل-كليك من غير سيرفر، والصور بتفضل جنبها في فولدر images.
export default defineConfig({
  base: './',
  plugins: [react(), viteSingleFile()],
  build: { assetsInlineLimit: 0 },
});
