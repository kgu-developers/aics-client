import * as styles from '~/app/(auth)/layout.css';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className={styles.section}>{children}</section>;
}
