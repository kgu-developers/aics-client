'use client';

import { useSuspenseQuery } from '@tanstack/react-query';

import { labsQueryOptions } from '~/apis/lab/queries';

import { LabCard } from './lab-card';

import * as styles from '~/components/lab/lab-list.css';

function LabList() {
  const { data } = useSuspenseQuery(labsQueryOptions.all());

  return (
    <div className={styles.labList}>
      {data.data.map((lab) => (
        <LabCard key={`lab-${lab.id}`} lab={lab} />
      ))}
    </div>
  );
}

export { LabList };
