'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import type { z } from 'zod'

import { Button, Input } from '@aics-client/design-system'

import * as styles from '~/features/change-password/components/change-password-form.css'
import { useChangePasswordMutation } from '~/features/change-password/hooks/use-change-password-mutation'
import {
  changePasswordSchema,
  defaultValues,
} from '~/features/change-password/schemas/change-password-form-schema'

const ChangePasswordForm = () => {
  const mutation = useChangePasswordMutation()

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<z.infer<typeof changePasswordSchema>>({
    resolver: zodResolver(changePasswordSchema),
    mode: 'onChange',
    defaultValues,
  })

  const onSubmit = (data: z.infer<typeof changePasswordSchema>) => {
    mutation.mutate(data, {
      onSuccess: () => {
        alert('비밀번호 변경이 완료되었습니다.')
      },
      onError: () => {
        alert('현재 비밀번호를 다시 확인해주세요.')
      },
    })
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
      <Input
        {...register('originalPassword')}
        type="password"
        label="현재 비밀번호"
        placeholder="현재 비밀번호를 입력해주세요"
        message={errors.originalPassword?.message}
      />

      <div className={styles.newPasswordWrapper}>
        <Input
          {...register('newPassword')}
          className={styles.inputField}
          type="password"
          label="새 비밀번호"
          placeholder="변경할 비밀번호를 입력해주세요"
          message={errors.newPassword?.message}
        />
        <Input
          {...register('confirmNewPassword')}
          className={styles.inputField}
          type="password"
          label="새 비밀번호 확인"
          placeholder="비밀번호를 다시 입력해주세요"
          message={errors.confirmNewPassword?.message}
        />
      </div>

      <Button type="submit" color="black" disabled={!isValid}>
        비밀번호 변경
      </Button>
    </form>
  )
}

export default ChangePasswordForm
