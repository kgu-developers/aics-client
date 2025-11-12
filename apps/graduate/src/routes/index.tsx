import { Navigate, createFileRoute } from '@tanstack/react-router';

import { ROUTE } from '~/shared/constants/route';
import { useAuthStore } from '~/shared/stores';

import { HomePage } from '~/pages/client/home';

export const Route = createFileRoute('/')({
  component: App,
});

function App() {
  const { isAdmin, isLoggedIn } = useAuthStore();

  if (isLoggedIn && isAdmin) {
    return <Navigate to={ROUTE.HOME} />;
  }

  if (isLoggedIn && !isAdmin) {
    return <HomePage />;
  }

  return (
    <div
      style={{
        color: 'white',
        display: 'grid',
        placeItems: 'center',
        height: '100vh',
      }}
    />
  );
}
