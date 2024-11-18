import { AuthFooter } from '~/components/auth-footer';
import { AuthHeader } from '~/components/auth-header';
import { SignUpForm } from '~/components/sign-up-form';
import * as styles from './page.css';

export default function SingUpPage() {
  return (
    <section className={styles.section}>
      <AuthHeader title="회원가입" description="경기대학교 AI컴퓨터공학부" />
      <SignUpForm />
      <AuthFooter
        description="이미 계정이 있으신가요?"
        link="로그인"
        href="/signin"
      />
    </section>
  );
}
