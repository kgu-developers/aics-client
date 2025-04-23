'use client'

import { useSuspenseQuery } from '@tanstack/react-query'

import { ClubCard } from '~/features/club/components/club-card'
import * as style from '~/features/club/components/club-list.css'
import { CLUB_QUERY_OPTIONS } from '~/features/club/services/queries'

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
