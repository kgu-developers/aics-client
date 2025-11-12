'use client';

import { useSuspenseQuery } from '@tanstack/react-query';

import LabListContainer from '~/shared/components/card-list/card-list-container';

import { LabCard } from '~/features/lab/components/lab-card';
import { LABS_QUERY_OPTIONS } from '~/features/lab/services/queries';

function LabList() {
  const { data } = useSuspenseQuery(LABS_QUERY_OPTIONS.ALL());

  return (
    <LabListContainer>
      {data.contents.map(lab => (
        <LabCard key={`lab-${lab.id}`} lab={lab} />
      ))}
    </LabListContainer>
  );
}

export { LabList };
