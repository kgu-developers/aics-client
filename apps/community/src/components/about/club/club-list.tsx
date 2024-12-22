'use client';

import { useSuspenseQuery } from '@tanstack/react-query';

import { CLUB_QUERY_OPTIONS } from '~/apis/about/club/queries';

import { ClubCard } from './club-card';

import * as style from './club-list.css';

function ClubList() {
  const { data } = useSuspenseQuery(CLUB_QUERY_OPTIONS.ALL());

  return (
    <div className={style.clubList}>
      {data.data.map((club) => (
        <ClubCard key={`club-${club.name}`} {...club} />
      ))}
    </div>
  );
}

export { ClubList };
