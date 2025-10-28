// @ts-check
import { defineConfig } from 'astro/config';

// @ts-ignore
import react from '@astrojs/react';
// 🛑 IMPORTANT: Make sure you ONLY import the Astro-specific integration here:
import tailwind from '@astrojs/tailwind'; 

// https://astro.build/config
export default defineConfig({
  // We only use the `integrations` array, which is correct.
  integrations: [
    react(),
    tailwind()
  ],

  // We remove the old `vite` block entirely, as the Astro integration handles it.
});
