'use client';

import { useSuspenseQuery } from '@tanstack/react-query';

import { LABS_QUERY_OPTIONS } from '~/apis/lab/queries';

import { LabCard } from './lab-card';

import * as styles from '~/components/lab/lab-list.css';

function LabList() {
  const { data } = useSuspenseQuery(LABS_QUERY_OPTIONS.ALL());

  return (
    <div className={styles.labList}>
      {data.data.map((lab) => (
        <LabCard key={`lab-${lab.id}`} lab={lab} />
      ))}
    </div>
  );
}

export { LabList };
