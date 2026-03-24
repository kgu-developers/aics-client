import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from '@tanstack/react-router';
import { App as AntApp } from 'antd';

import { AntdMessageBridge } from './shared/providers/AntdMessageBridge';
import { StrictMode, useEffect } from 'react';
import ReactDOM from 'react-dom/client';

import { submitReissue } from './client/pages/auth/login/api/submitReissue';
import reportWebVitals from './reportWebVitals.ts';
import { useAuthStore } from './shared/stores';
import {
  getRefreshToken,
  logout,
  queryClient,
  router,
  setAccessToken,
  setRefreshToken,
  setRole,
} from './shared/utils';

import './globals.css';

function App() {
  const { isAuthenticated, isAdmin, updateAuth } = useAuthStore();

  useEffect(() => {
    const initializeAuth = async () => {
      const refreshToken = getRefreshToken();

      if (refreshToken) {
        try {
          const response = await submitReissue(refreshToken);
          setAccessToken(response.accessToken);
          setRefreshToken(response.refreshToken);
          setRole(response.role);
          updateAuth();
          console.log('updateAuth');
        } catch {
          logout();
          router.navigate({ to: '/login' });
        }
      }
    };

    initializeAuth();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AntApp>
        <AntdMessageBridge />
        <RouterProvider
          router={router}
          context={{
            auth: {
              isAuthenticated,
              isAdmin,
            },
          }}
        />
      </AntApp>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

// Render the app
const rootElement = document.getElementById('app');
if (rootElement && !rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
