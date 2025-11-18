import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

// Import the generated route tree
import reportWebVitals from './reportWebVitals.ts';
import { routeTree } from './routeTree.gen';
import { useAuthStore } from './shared/stores';
import { queryClient } from './shared/utils';

import './globals.css';

const router = createRouter({
  routeTree,
  context: undefined!,
  defaultPreload: 'intent',
  scrollRestoration: true,
  defaultStructuralSharing: true,
  defaultPreloadStaleTime: 0,
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  const { isAuthenticated, isAdmin, setIsAuthenticated, setIsAdmin } =
    useAuthStore();

  return (
    <QueryClientProvider client={queryClient}>
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
