import Image from 'next/image';

import type { Professor } from '~/apis/member/professor/remote';

import * as styles from '~/components/member/professor/professor-card.css';

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
        <h2 className={styles.professorName}>{professor.name}</h2>
        <p className={styles.professorType}>{professor.type}</p>
      </div>

      <div className={styles.cardFooter}>
        <p className={styles.professorContact}>{professor.contact}</p>
        <p className={styles.professorEmail}>{professor.email}</p>
        <p>{professor.officeLoc}</p>
      </div>
    </div>
  );
}

export { ProfessorCard };
