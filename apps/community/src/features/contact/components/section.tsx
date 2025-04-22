import * as styles from '~/features/contact/components/section.css';

/* 추후 삭제되어야 할 컴포넌트입니다 */

function Section({ children }: { children: React.ReactNode }) {
  return <section className={styles.section}>{children}</section>;
}

function Title({ children }: { children: React.ReactNode }) {
  return <h2 className={styles.sectionTitle}>{children}</h2>;
}

Section.Title = Title;

export { Section };
