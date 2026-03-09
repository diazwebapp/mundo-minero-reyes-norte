// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    image: {
    // Esto permite que Astro optimice imágenes de estos sitios
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'astro.build',
      },
    ],
  },
});
