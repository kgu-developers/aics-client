'use client'

import { useSuspenseQuery } from '@tanstack/react-query'

import { LabCard } from '~/features/lab/components/lab-card'
import * as styles from '~/features/lab/components/lab-list.css'
import { LABS_QUERY_OPTIONS } from '~/features/lab/services/queries'

function LabList() {
  const { data } = useSuspenseQuery(LABS_QUERY_OPTIONS.ALL())

  return (
    <div className={styles.labList}>
      {data.contents.map((lab) => (
        <LabCard key={`lab-${lab.id}`} lab={lab} />
      ))}
    </div>
  )
}

export { LabList }
