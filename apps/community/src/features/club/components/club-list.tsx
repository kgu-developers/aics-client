'use client'

import { useSuspenseQuery } from '@tanstack/react-query'

import { CLUB_QUERY_OPTIONS } from '~/features/club/services/queries'

import { ClubCard } from './club-card'

import * as style from './club-list.css'

function ClubList() {
  const { data } = useSuspenseQuery(CLUB_QUERY_OPTIONS.ALL())

  return (
    <div className={style.clubList}>
      {data.contents.map((club) => (
        <ClubCard key={`club-${club.name}`} {...club} />
      ))}
    </div>
  )
}

export { ClubList }
