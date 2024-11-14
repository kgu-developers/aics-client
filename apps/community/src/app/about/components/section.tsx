import * as styles from '~/app/about/components/section.css';

export function Section({ children }: { children: React.ReactNode }) {
  return <section className={styles.section}>{children}</section>;
}

function Title({ children }: { children: React.ReactNode }) {
  return <h2 className={styles.sectionTitle}>{children}</h2>;
}

Section.Title = Title;
