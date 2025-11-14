import { useRouter } from '@tanstack/react-router';

import { AuthContext } from '~/routes/__root';

export default function useLogout(auth: AuthContext['auth']) {
  const router = useRouter();

  const handleLogout = () => {
    Promise.all([auth.setIsAuthenticated(false), auth.setIsAdmin(false)]).then(
      () => {
        router.navigate({ to: '/login' });
      },
    );
  };

  return handleLogout;
}
