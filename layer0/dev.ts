import createDevServer from '@layer0/core/dev/createDevServer';

export default async function dev() {
  return createDevServer({
    label: 'Nuxt',
    command: (port) => `npx nuxt --port ${port}`,
    ready: [/Listening on/i, /Listening on/i],
  });
}
