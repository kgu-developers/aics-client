import { ProfessorCard } from '~/components/professor-card';

import * as styles from '~/app/member/professor/page.css';

import { PROFESSORS } from './mocks/professor';

export default function Page(): JSX.Element {
  return (
    <div className={styles.professorListWrapper}>
      {PROFESSORS.map((professor) => (
        <ProfessorCard
          key={`professor-${professor.id}`}
          professor={professor}
        />
      ))}
    </div>
  );
}
