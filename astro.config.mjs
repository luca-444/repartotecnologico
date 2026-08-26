import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://repartotecnologico.it',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
