import * as styles from '~/app/about/components/section.css';

export const Section = ({ children }: { children: React.ReactNode }) => {
  return <section className={styles.section}>{children}</section>;
};

const Title = ({ children }: { children: React.ReactNode }) => {
  return <h2 className={styles.sectionTitle}>{children}</h2>;
};

Title.displayName = 'SectionTitle';

Section.Title = Title;
