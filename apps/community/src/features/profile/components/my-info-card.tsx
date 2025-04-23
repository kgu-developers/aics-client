'use client'

import type { UseFormRegisterReturn } from 'react-hook-form'

import { Input } from '@aics-client/design-system'

import * as styles from '~/features/profile/components/my-info-card.css'

interface MyInfoCardProps {
  title: string
  children: React.ReactNode
}

interface MyInfoFieldProps {
  title: string
  value: string
}

interface MyInfoEditableFieldProps extends MyInfoFieldProps {
  register?: UseFormRegisterReturn
  error?: string
}

function MyInfoCard({ title, children }: MyInfoCardProps) {
  return (
    <div className={styles.cardWrapper}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <div className={styles.cardContent}>{children}</div>
    </div>
  )
}

function MyInfoField({ title, value }: MyInfoFieldProps) {
  return (
    <div>
      <h3 className={styles.fieldTitle}>{title}</h3>
      <p className={styles.field}>{value}</p>
    </div>
  )
}

function MyInfoEditableField({
  title,
  value,
  register,
  error,
}: MyInfoEditableFieldProps) {
  return (
    <div className={styles.editFieldWrapper}>
      <div>
        <h3 className={styles.fieldTitle}>{title}</h3>
        <Input
          className={styles.editField}
          type="text"
          defaultValue={value}
          message={error}
          {...register}
        />
      </div>
    </div>
  )
}

MyInfoCard.Field = MyInfoField
MyInfoCard.EditableField = MyInfoEditableField

export { MyInfoCard }
