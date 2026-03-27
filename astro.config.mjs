import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite';
import vercel from '@astrojs/vercel';

import icon from 'astro-icon';

const {DOMAIN} = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), '');

// https://astro.build/config
export default defineConfig({
  output:'server',
  site: DOMAIN,

  image: {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: DOMAIN,
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

  adapter: vercel(),
  integrations: [icon()]
});