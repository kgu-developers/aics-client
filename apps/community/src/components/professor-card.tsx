import Image from 'next/image';

import * as styles from '~/components/professor-card.css';

import type { Professor } from '~/app/member/professor/mocks/professor';

function ProfessorCard({ professor }: { professor: Professor }) {
  return (
    <div className={styles.card}>
      <Image
        src={professor.img ?? 'https://placehold.co/128'}
        width={100}
        height={100}
        className={styles.avatarImage}
        alt={professor.name}
      />

      <div className={styles.cardContent}>
        <h3 className={styles.professorName}>{professor.name}</h3>
        <p className={styles.professorType}>{professor.type}</p>
      </div>

      <div className={styles.cardFooter}>
        <p className={styles.professorContact}>{professor.contact}</p>
        <p className={styles.professorEmail}>{professor.email}</p>
      </div>
    </div>
  );
}

export { ProfessorCard };
