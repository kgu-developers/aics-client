import { useRouter } from '@tanstack/react-router';

import { Button } from '~/shared/components';
import { ROUTE } from '~/shared/constants';

import LoginForm from './LoginForm';
import SignupForm from './SignupForm';

import { vars } from '~/vars.css';

export default function LoginPage() {
  const router = useRouter();
  const { setIsAuthenticated, setIsAdmin } = router.options.context.auth;

  return (
    <div
      style={{
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        gap: vars.spacing.lg,
        width: '100%',
      }}
    >
      <LoginForm />
      <SignupForm />
      <div style={{ display: 'flex', gap: vars.spacing.sm, width: '300px' }}>
        <Button
          size='md'
          type='button'
          style={{ flex: 1, textWrap: 'nowrap' }}
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
          size='md'
          type='button'
          style={{ flex: 1, textWrap: 'nowrap' }}
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
