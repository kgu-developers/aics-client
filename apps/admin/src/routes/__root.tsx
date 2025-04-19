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
            itemBg: '#f1f5f9',
          },
          Carousel: {
            colorBgContainer: '#000',
            colorText: '#000',
          },
        },
      }}
    >
      <main className="relative flex w-dvw h-dvh">
        {!isSigninPage && <AsideNavigationMenu />}
        <div
          className={`flex flex-col overflow-auto w-full h-dvh ${!isSigninPage && 'px-48 py-12'}`}
        >
          <Outlet />
        </div>
        <TanStackRouterDevtools position="top-right" />
        <ReactQueryDevtools initialIsOpen={false} />
      </main>
    </ConfigProvider>
  );
}
