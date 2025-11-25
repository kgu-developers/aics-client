import { createRouter } from '@tanstack/react-router';

import { routeTree } from '~/routeTree.gen';

const router = createRouter({
  routeTree,
  context: undefined!,
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default router;
