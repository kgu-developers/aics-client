import * as styles from '~/components/about/section.css';

function Section({ children }: { children: React.ReactNode }) {
  return <section className={styles.section}>{children}</section>;
}

function Title({ children }: { children: React.ReactNode }) {
  return <h2 className={styles.sectionTitle}>{children}</h2>;
}

Section.Title = Title;

export { Section };
