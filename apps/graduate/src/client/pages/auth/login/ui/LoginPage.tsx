import { useRouter } from '@tanstack/react-router';

import { Button } from '~/shared/ui';

import LoginForm from './LoginForm';
// import SignupForm from './SignupForm';
import * as styles from '../styles/loginPage.css';

export default function LoginPage() {
  const router = useRouter();

  return (
    <div className={styles.container}>
      <img src='/logo.png' alt='logo' className={styles.logo} />
      <div className={styles.titleWrapper}>
        <p className={styles.subTitle}>
          경기대학교 컴퓨터공학전공 졸업 요건 취득 서비스
        </p>
      </div>
      <div className={styles.formWrapper}>
        <LoginForm />
        <Button
          size='md'
          variant='sub'
          type='button'
          className={styles.button}
          onClick={() => router.navigate({ to: '/signup' })}
        >
          회원가입
        </Button>
      </div>
    </div>
  );
}
