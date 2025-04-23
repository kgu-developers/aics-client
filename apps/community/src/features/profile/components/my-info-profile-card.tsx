'use client'

import { MyInfoCard } from '~/features/profile/components/my-info-card'

interface Props {
  data: {
    title: string
    value: string
  }[]
}

function MyInfoProfileCard({ data }: Props) {
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

export { MyInfoProfileCard }
