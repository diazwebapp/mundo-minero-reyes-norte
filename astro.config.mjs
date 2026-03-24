// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output:'server',
  site: 'https://mundo-minero-reyes-del-norte.vercel.app',
    image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mmreyesdelnorte.com',
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co', // Importante para que Astro procese las fotos del storage
      },
       {
        protocol: 'https',
        hostname: '*.vercel.app', // Importante para que Astro procese las fotos del storage
      },
    ],
  },
  adapter: vercel()
});
