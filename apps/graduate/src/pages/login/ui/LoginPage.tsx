import { useRouter } from '@tanstack/react-router';

import { Button } from '~/shared/components';
import { ROUTE } from '~/shared/constants/route';

export default function LoginPage() {
  const router = useRouter();
  const { setIsAuthenticated, setIsAdmin } = router.options.context.auth;

  return (
    <div
      style={{
        color: 'white',
        display: 'grid',
        placeItems: 'center',
        height: '100vh',
      }}
    >
      <div style={{ display: 'flex', gap: '10px' }}>
        <Button
          size='lg'
          type='button'
          onClick={() => {
            Promise.all([setIsAuthenticated(true), setIsAdmin(false)]).then(
              () => {
                router.navigate({ to: ROUTE.HOME, replace: true });
              },
            );
          }}
        >
          Client 클라이언트
        </Button>
        <Button
          size='lg'
          type='button'
          onClick={() => {
            Promise.all([setIsAuthenticated(true), setIsAdmin(true)]).then(
              () => {
                router.navigate({ to: ROUTE.HOME, replace: true });
              },
            );
          }}
        >
          Admin 관리자
        </Button>
      </div>
    </div>
  );
}
