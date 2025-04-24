'use client'

import { MyInfoCard } from '~/features/profile/components/my-info-card'
import type { UserDetail } from '~/features/profile/types/profile'

function ReadOnlyMyProfileCard({ data }: { data: UserDetail[] }) {
  return (
    <MyInfoCard title="내 프로필">
      {data.map((detail) => (
        <MyInfoCard.Field
          key={detail.title}
          title={detail.title}
          value={detail.value}
        />
      ))}
    </MyInfoCard>
  )
}

export { ReadOnlyMyProfileCard }
