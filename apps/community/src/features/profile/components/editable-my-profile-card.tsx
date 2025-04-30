'use client'

import type { UseFormRegisterReturn } from 'react-hook-form'
import type { z } from 'zod'

import { Button, Input } from '@aics-client/design-system'

import * as styles from '~/features/profile/components/editable-my-profile-card.css'
import { MyInfoCard } from '~/features/profile/components/my-info-card'
import { editMyInfoSchema } from '~/features/profile/schemas/edit-my-info-schema'
import { useEditProfile } from '~/features/profile/services/use-edit-profile.mutation'
import type { UserEditableDetail } from '~/features/profile/types/profile'
import { useZodForm } from '~/shared/hooks/use-zod-form'

type EditProfileFormValues = z.infer<typeof editMyInfoSchema>

interface MyInfoEditableFieldProps {
  title: string
  value: string
  register?: UseFormRegisterReturn
  error?: string
}

function MyInfoEditableField({
  title,
  value,
  register,
  error,
}: MyInfoEditableFieldProps) {
  return (
    <section className={styles.editFieldWrapper}>
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
    </section>
  )
}

function EditableMyProfileCard({
  initialData,
}: { initialData: UserEditableDetail[] }) {
  const mutation = useEditProfile()

  const defaultValues = initialData.reduce(
    (acc, { field, value }) => {
      acc[field] = value
      return acc
    },
    {} as Record<string, string>,
  )

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isSubmitted },
  } = useZodForm({
    schema: editMyInfoSchema,
    defaultValues: defaultValues,
    mode: 'onChange',
  })

  const handleFormSubmit = (formData: EditProfileFormValues) => {
    mutation.mutate(formData)
  }

  return (
    <MyInfoCard title="기본 정보">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        {initialData.map((detail) => (
          <MyInfoEditableField
            key={detail.field}
            title={detail.title}
            value={detail.value}
            register={register(detail.field)}
            error={isSubmitted ? errors[detail.field]?.message : ''}
          />
        ))}
        <Button size="sm" color="black" disabled={!isDirty} type="submit">
          저장
        </Button>
      </form>
    </MyInfoCard>
  )
}

export { EditableMyProfileCard }
