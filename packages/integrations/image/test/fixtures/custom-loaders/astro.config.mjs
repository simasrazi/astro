import { defineConfig } from 'astro/config';
import image from '@astrojs/image';

// https://astro.build/config
export default defineConfig({
	site: 'http://localhost:3000',
	integrations: [image({ serviceEntryPoint: '@test/image-lib/ssr' })]
});