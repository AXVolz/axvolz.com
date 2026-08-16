// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  redirects: {
    "/made": "/built",
    "/writing": "/bookish",
    "/written": "/bookish",
    "/reading": "/bookish",
    "/read": "/bookish",
    "/places": "/lived",
    "/lived/cadastre": "/lived",
  },
});
