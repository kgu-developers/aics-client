import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Outlet, createRootRoute } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

export const Route = createRootRoute({
  component: App,
});

function App() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools position="top-right" />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}
