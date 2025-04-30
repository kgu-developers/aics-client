'use client'

import { useSuspenseQuery } from '@tanstack/react-query'

import { EditableMyProfileCard } from '~/features/profile/components/editable-my-profile-card'
import { ReadOnlyMyProfileCard } from '~/features/profile/components/read-only-my-profile-card'
import { MY_PROFILE_QUERY_OPTIONS } from '~/features/profile/services/queries'
import type {
  UserDetail,
  UserEditableDetail,
} from '~/features/profile/types/profile'
import * as styles from '~/widgets/profile/components/my-information.css'

function MyInformation() {
  const { data } = useSuspenseQuery(MY_PROFILE_QUERY_OPTIONS.PROFILE())

  const userDetails: UserDetail[] = [
    { title: '이름', value: data.name },
    { title: '학번', value: data.id },
    { title: '구분', value: data.role },
    { title: '전공', value: data.major },
  ]

  const editableUserDetails: UserEditableDetail[] = [
    { title: '전화번호', value: data.phone, field: 'phone' },
    { title: '이메일', value: data.email, field: 'email' },
  ]

  return (
    <section className={styles.cardWrapper}>
      <ReadOnlyMyProfileCard data={userDetails} />
      <EditableMyProfileCard initialData={editableUserDetails} />
    </section>
  )
}

export { MyInformation }
