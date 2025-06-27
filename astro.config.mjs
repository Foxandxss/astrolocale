// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://foxandxss.github.io', // Replace with your actual GitHub username
  base: '/astrolocale', // Replace with your repository name
  i18n: {
    locales: ["es", "en"], // Locales you want to support
    defaultLocale: "es", // Default locale (fallback)

    routing: {
      prefixDefaultLocale: true, // Ensures that your default locale is prefixed aswell
    },
  },
  vite: {
    plugins: [tailwindcss()]
  }
});