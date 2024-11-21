import { AuthFooter } from '~/components/(auth)/auth-footer';
import { AuthHeader } from '~/components/(auth)/auth-header';
import * as styles from './layout.css';

export default function AuthLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  const isSignIn = params.slug === 'signin';

  return (
    <section className={styles.section}>
      <AuthHeader
        title={isSignIn ? '로그인' : '회원가입'}
        description="경기대학교 AI컴퓨터공학부"
      />
      {children}
      <AuthFooter
        description={
          isSignIn ? '계정이 없으신가요?' : '이미 계정이 있으신가요?'
        }
        link={isSignIn ? '회원가입' : '로그인'}
        href={isSignIn ? '/signup' : '/signin'}
      />
    </section>
  );
}
