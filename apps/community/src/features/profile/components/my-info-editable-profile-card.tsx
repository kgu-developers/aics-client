'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@aics-client/design-system'
import { MyInfoCard } from '~/components/my/my-info-card'
import { useEditProfileMutation } from '~/features/profile/services/use-edit-profile.mutation'

interface EditableDetail {
  title: string
  value: string
  field: keyof FormValues
}

interface Props {
  data: EditableDetail[]
}

const schema = z.object({
  phone: z
    .string()
    .min(1, { message: '전화번호를 입력해주세요.' })
    .regex(/^\d{3}-\d{4}-\d{4}$/, {
      message: '전화번호는 010-1234-5678 형식이어야 합니다.',
    }),
  email: z.string().email({ message: '올바른 이메일 형식이 아닙니다.' }),
})

type FormValues = z.infer<typeof schema>

function MyInfoEditableProfileCard({ data }: Props) {
  const mutation = useEditProfileMutation()

  const defaultValues = data.reduce(
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
    resolver: zodResolver(schema),
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
        {data.map((detail) => (
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

export { MyInfoEditableProfileCard }
