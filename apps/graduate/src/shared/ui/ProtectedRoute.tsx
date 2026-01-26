import { Navigate } from '@tanstack/react-router';
import type { ReactNode } from 'react';

import { ROUTE } from '../constants';
import { useAuthStore } from '../stores';

export default function ProtectedRoute({
  children,
  isClient,
}: {
  children: ReactNode;
  isClient?: boolean;
}) {
  const { isAdmin } = useAuthStore();

  const isClientRoute = isClient && isAdmin;
  const isAdminRoute = !isClient && !isAdmin;

  if (isClientRoute || isAdminRoute) {
    return <Navigate to={ROUTE.HOME} />;
  }

  return children;
}
