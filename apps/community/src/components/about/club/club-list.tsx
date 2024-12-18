'use client';

import { useSuspenseQuery } from '@tanstack/react-query';

import { clubQueryOptions } from '~/apis/about/club/queries';

import { ClubCard } from './club-card';

import * as style from './club-list.css';

function ClubList() {
  const { data } = useSuspenseQuery(clubQueryOptions.all());

  return (
    <div className={style.clubList}>
      {data.data.map((club) => (
        <ClubCard key={`club-${club.name}`} {...club} />
      ))}
    </div>
  );
}

export { ClubList };
