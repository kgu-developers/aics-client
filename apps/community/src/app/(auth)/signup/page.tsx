import Link from 'next/link';

import { SignUpForm } from '~/components/sign-up-form';
import * as styles from './page.css';

export default function SingUpPage() {
  return (
    <section className={styles.section}>
      <div className={styles.infoWrapper}>
        <h1 className={styles.title}>회원가입</h1>
        <p>경기대학교 AI컴퓨터공학부</p>
      </div>
      <SignUpForm />
      <div className={styles.linkWrapper}>
        <p>이미 계정이 있으신가요?</p>
        <Link href="/signin" className={styles.link}>
          로그인
        </Link>
      </div>
    </section>
  );
}
