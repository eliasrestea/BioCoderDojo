import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  site: 'https://eliasrestea.github.io/BioCoderDojo/',
<<<<<<< HEAD
  base: '/BioCoderDojo',
});
=======
  base: '/',
});
>>>>>>> 6158884 (squash)
