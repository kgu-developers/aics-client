'use client'

import { MyInfoCard } from '~/features/profile/components/my-info-card'
import * as styles from '~/features/profile/components/read-only-my-profile-card.css'
import type { UserDetail } from '~/features/profile/types/profile'

function ReadOnlyMyProfileCard({
  data,
}: {
  data: UserDetail[]
}) {
  return (
    <MyInfoCard title="내 프로필">
      {data.map((detail) => (
        <CardContent
          key={detail.title}
          title={detail.title}
          value={detail.value}
        />
      ))}
    </MyInfoCard>
  )
}

function CardContent({
  title,
  value,
}: {
  title: string
  value: string
}) {
  return (
    <div>
      <h3 className={styles.fieldTitle}>{title}</h3>
      <p className={styles.field}>{value}</p>
    </div>
  )
}

export { ReadOnlyMyProfileCard }
