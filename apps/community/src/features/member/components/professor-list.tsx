'use client';

import { useSuspenseQuery } from '@tanstack/react-query';

import { PROFESSORS_QUERY_OPTIONS } from '~/features/member/services/queries';

import { ProfessorCard } from './professor-card';

import * as styles from './professor-list.css';

function ProfessorList() {
  const { data } = useSuspenseQuery(PROFESSORS_QUERY_OPTIONS.ALL());
  return (
    <div className={styles.professorListWrapper}>
      {data.contents.map((professor) => (
        <ProfessorCard
          key={`professor-${professor.id}`}
          professor={professor}
        />
      ))}
    </div>
  );
}

export { ProfessorList };
