import { AuthFooter } from '~/components/auth-footer';
import { AuthHeader } from '~/components/auth-header';
import { SignInForm } from '~/components/sign-in-form';
import * as styles from './page.css';

export default function SignInPage() {
  return (
    <section className={styles.section}>
      <AuthHeader title="로그인" description="경기대학교 AI컴퓨터공학부" />
      <SignInForm />
      <AuthFooter
        description="계정이 없으신가요?"
        link="회원가입"
        href="/signup"
      />
    </section>
  );
}
