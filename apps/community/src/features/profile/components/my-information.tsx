'use client'

import { useSuspenseQuery } from '@tanstack/react-query'

import { MyInfoEditableProfileCard } from '~/features/profile/components/my-info-editable-profile-card'
import { MyInfoProfileCard } from '~/features/profile/components/my-info-profile-card'
import * as styles from '~/features/profile/components/my-information.css'
import { MY_PROFILE_QUERY_OPTIONS } from '~/features/profile/services/queries'

function MyInformation() {
  const { data } = useSuspenseQuery(MY_PROFILE_QUERY_OPTIONS.PROFILE())

  const userDetails = [
    { title: '이름', value: data.name },
    { title: '학번', value: data.id },
    { title: '구분', value: data.role },
    { title: '전공', value: data.major },
  ]

  const userEditableDetails = [
    { title: '전화번호', value: data.phone, field: 'phone' as const },
    { title: '이메일', value: data.email, field: 'email' as const },
  ]

  return (
    <div className={styles.cardWrapper}>
      <MyInfoProfileCard data={userDetails} />
      <MyInfoEditableProfileCard data={userEditableDetails} />
    </div>
  )
}

export { MyInformation }
