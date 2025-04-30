'use client'

import type { FieldErrors, UseFormRegister } from 'react-hook-form'
import type { z } from 'zod'

import { Button, Input } from '@aics-client/design-system'

import * as styles from '~/features/change-password/components/change-password-form.css'
import { useChangePasswordMutation } from '~/features/change-password/hooks/use-change-password.mutation'
import {
  changePasswordSchema,
  defaultValues,
} from '~/features/change-password/schemas/change-password-form-schema'
import FormErrorMessage from '~/shared/components/form/form-error-message'
import { useZodForm } from '~/shared/hooks/use-zod-form'

type ChangePasswordFormValues = z.infer<typeof changePasswordSchema>

interface ChangePasswordFormFieldsProps {
  register: UseFormRegister<ChangePasswordFormValues>
  errors: FieldErrors<ChangePasswordFormValues>
}

function ChangePasswordFormFields({
  register,
  errors,
}: ChangePasswordFormFieldsProps) {
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

function ChangePasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useZodForm({
    schema: changePasswordSchema,
    defaultValues,
    mode: 'onChange',
  })
  const { mutate, isError } = useChangePasswordMutation()

  const onSubmit = (data: ChangePasswordFormValues) => {
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
      <FormErrorMessage
        isError={isError}
        message="현재 비밀번호를 다시 확인해주세요."
      />
    </form>
  )
}

export default ChangePasswordForm
