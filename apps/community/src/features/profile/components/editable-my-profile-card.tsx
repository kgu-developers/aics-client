'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import type { z } from 'zod'

import { Button } from '@aics-client/design-system'

import { MyInfoCard } from '~/features/profile/components/my-info-card'
import { editMyInfoSchema } from '~/features/profile/schemas/edit-my-info-schema'
import { useEditProfile } from '~/features/profile/services/use-edit-profile.mutation'
import type { UserEditableDetail } from '~/features/profile/types/profile'

type FormValues = z.infer<typeof editMyInfoSchema>

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
  } = useForm<FormValues>({
    resolver: zodResolver(editMyInfoSchema),
    defaultValues,
    mode: 'onChange',
  })

  const handleFormSubmit = (formData: FormValues) => {
    mutation.mutate(formData)
    alert('회원 정보가 수정되었습니다.')
  }

  return (
    <MyInfoCard title="기본 정보">
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        {initialData.map((detail) => (
          <MyInfoCard.EditableField
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
