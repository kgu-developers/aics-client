import * as styles from './layout.css';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <section className={styles.section}>{children}</section>;
}
