'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import {
  type FieldErrors,
  type UseFormRegister,
  useForm,
} from 'react-hook-form'
import type { z } from 'zod'

import { Button, Input } from '@aics-client/design-system'

import * as styles from '~/features/change-password/components/change-password-form.css'
import { useChangePasswordMutation } from '~/features/change-password/hooks/use-change-password-mutation'
import {
  changePasswordSchema,
  defaultValues,
} from '~/features/change-password/schemas/change-password-form-schema'

const useChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<z.infer<typeof changePasswordSchema>>({
    resolver: zodResolver(changePasswordSchema),
    mode: 'onChange',
    defaultValues,
  })

  return {
    register,
    handleSubmit,
    errors,
    isValid,
  }
}

function ChangePasswordFormFields({
  register,
  errors,
}: {
  register: UseFormRegister<z.infer<typeof changePasswordSchema>>
  errors: FieldErrors<z.infer<typeof changePasswordSchema>>
}) {
  return (
    <>
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
    </>
  )
}

function ChangePasswordErrorMessage({ isError }: { isError: boolean }) {
  if (!isError) return null

  return (
    <span className={styles.errorMessage}>
      현재 비밀번호를 다시 확인해주세요.
    </span>
  )
}

function ChangePasswordForm() {
  const { register, handleSubmit, errors, isValid } = useChangePasswordForm()
  const { mutate, isError } = useChangePasswordMutation()

  const onSubmit = (data: z.infer<typeof changePasswordSchema>) => {
    const { confirmNewPassword, ...patchData } = data
    if (isValid) {
      mutate(patchData)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
      <ChangePasswordFormFields register={register} errors={errors} />
      <Button type="submit" color="black" disabled={!isValid}>
        비밀번호 변경
      </Button>
      <ChangePasswordErrorMessage isError={isError} />
    </form>
  )
}

export default ChangePasswordForm
