// @ts-check
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import { BASE_URL } from './src/utils/config';

// https://astro.build/config
export default defineConfig({
  output:'server',
    image: {
    // Esto permite que Astro optimice imágenes de estos sitios
    remotePatterns: [
      {
        protocol: 'https',
        hostname: new URL(BASE_URL).hostname, // El dominio donde están las fotos
        pathname: '/**',     // Opcional: limitar a una carpeta específica
      },
      {
        protocol: 'https',
        hostname: 'astro.build',
      },
    ],
  },
  adapter: vercel()
});
