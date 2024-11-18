import Link from 'next/link';

import { SignInForm } from '~/components/sign-in-form';
import * as styles from './page.css';

export default function SingInPage() {
  return (
    <section className={styles.section}>
      <div className={styles.infoWrapper}>
        <h1 className={styles.title}>로그인</h1>
        <p>경기대학교 AI컴퓨터공학부</p>
      </div>
      <SignInForm />
      <div className={styles.linkWrapper}>
        <p>계정이 없으신가요?</p>
        <Link href="/signup" className={styles.link}>
          회원가입
        </Link>
      </div>
    </section>
  );
}
