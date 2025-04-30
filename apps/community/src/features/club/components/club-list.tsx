'use client'

import { useSuspenseQuery } from '@tanstack/react-query'

import { ClubCard } from '~/features/club/components/club-card'
import { CLUB_QUERY_OPTIONS } from '~/features/club/services/queries'
import ClubListContainer from '~/shared/components/card-list/card-list-container'

function ClubList() {
  const { data } = useSuspenseQuery(CLUB_QUERY_OPTIONS.ALL())

  return (
    <ClubListContainer>
      {data.contents.map((club) => (
        <ClubCard key={`club-${club.name}`} {...club} />
      ))}
    </ClubListContainer>
  )
}

export { ClubList }
