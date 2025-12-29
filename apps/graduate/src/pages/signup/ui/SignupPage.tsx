import SignupForm from './SignupForm';

import * as styles from '~/pages/login/styles/loginPage.css';

export default function SignupPage() {
  return (
    <div className={styles.container}>
      <div className={styles.titleWrapper}>
        <h1 className={styles.title}>회원가입</h1>
        <p className={styles.subTitle}>회원가입 후 서비스 이용이 가능합니다.</p>
      </div>
      <div className={styles.formWrapper}>
        <SignupForm />
      </div>
    </div>
  );
}
