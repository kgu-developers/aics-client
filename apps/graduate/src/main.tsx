import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider } from '@tanstack/react-router';
import { App as AntApp } from 'antd';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import reportWebVitals from './reportWebVitals.ts';
import { useAuthStore } from './shared/stores';
import { queryClient, router } from './shared/utils';

import './globals.css';

function App() {
  const { isAuthenticated, isAdmin, setIsAuthenticated, setIsAdmin } =
    useAuthStore();

  return (
    <QueryClientProvider client={queryClient}>
      <AntApp>
        <RouterProvider
          router={router}
          context={{
            auth: {
              isAuthenticated,
              isAdmin,
              setIsAuthenticated,
              setIsAdmin,
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
