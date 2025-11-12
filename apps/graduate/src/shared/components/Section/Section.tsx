import type { ReactNode } from 'react';

import * as styles from './Section.css';

export default function Section({ children }: { children: ReactNode }) {
  return <section className={styles.section}>{children}</section>;
}

function SectionHeader({
  children,
  subtitle,
  action,
}: {
  children: ReactNode;
  subtitle?: string;
  action?: ReactNode;
}) {
  return (
    <header className={styles.sectionHeader}>
      <div className={styles.sectionHeaderTitle}>{children}</div>
      <div className={styles.sectionHeaderSubtitle}>{subtitle}</div>
      <div className={styles.sectionHeaderAction}>{action}</div>
    </header>
  );
}

Section.Header = SectionHeader;
