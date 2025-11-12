'use client';

import * as styles from '~/features/profile/components/my-info-card.css';

interface MyInfoCardProps {
  title: string;
  children: React.ReactNode;
}

function MyInfoCard({ title, children }: MyInfoCardProps) {
  return (
    <section className={styles.cardWrapper}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <div className={styles.cardContent}>{children}</div>
    </section>
  );
}

export { MyInfoCard };
