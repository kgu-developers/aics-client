import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Outlet, createRootRoute, useLocation } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { ConfigProvider } from 'antd';
import AsideNavigationMenu from '~/components/aside-navigation-menu';

export const Route = createRootRoute({
  component: App,
});

function App() {
  const location = useLocation();
  const isSigninPage = location.pathname === '/';

  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            itemBg: '#e2e8f0',
          },
        },
      }}
    >
      <main className="relative flex h-dvh">
        {!isSigninPage && <AsideNavigationMenu />}
        <div className="flex flex-col items-center justify-center w-full h-full">
          <Outlet />
        </div>
        <TanStackRouterDevtools position="top-right" />
        <ReactQueryDevtools initialIsOpen={false} />
      </main>
    </ConfigProvider>
  );
}
