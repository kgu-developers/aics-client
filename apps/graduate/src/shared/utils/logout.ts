import { ROUTE } from '../constants';
import { useAuthStore } from '../stores';
import router from './router';
import { clearTokens } from './token';

export default function logout(): void {
  clearTokens();
  const { setIsAuthenticated, setIsAdmin } = useAuthStore.getState();
  setIsAuthenticated(false);
  setIsAdmin(false);
  router.navigate({ to: ROUTE.LOGIN });
}
