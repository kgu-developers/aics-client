'use client'

import { useSuspenseQuery } from '@tanstack/react-query'

import { ProfessorCard } from '~/features/member/components/professor-card'
import * as styles from '~/features/member/components/professor-list.css'
import { PROFESSORS_QUERY_OPTIONS } from '~/features/member/services/queries'

function ProfessorList() {
  const { data } = useSuspenseQuery(PROFESSORS_QUERY_OPTIONS.ALL())

  return (
    <div className={styles.professorListWrapper}>
      {data.contents.map((professor) => (
        <ProfessorCard
          key={`professor-${professor.id}`}
          professor={professor}
        />
      ))}
    </div>
  )
}

export { ProfessorList }
