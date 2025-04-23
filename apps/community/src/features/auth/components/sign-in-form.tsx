'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import {
  useForm,
  type UseFormRegister,
  type FieldErrors,
} from 'react-hook-form'
import type { z } from 'zod'

import { Button, Input } from '@aics-client/design-system'

import * as styles from '~/features/auth/components/sign-in-form.css'
import { useSignIn } from '~/features/auth/hooks/use-sign-in'
import {
  defaultValues,
  signInFormSchema,
} from '~/features/auth/schemas/sign-in-form-schema'

const useSignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues,
  })

  return {
    register,
    handleSubmit,
    errors,
    isValid,
  }
}

function SignInFormFields({
  register,
  errors,
}: {
  register: UseFormRegister<z.infer<typeof signInFormSchema>>
  errors: FieldErrors<z.infer<typeof signInFormSchema>>
}) {
  return (
    <>
      <Input
        {...register('userId')}
        type="text"
        placeholder="학번을 입력해주세요"
        message={errors.userId?.message}
      />
      <Input
        {...register('password')}
        type="password"
        placeholder="비밀번호를 입력해주세요"
        message={errors.password?.message}
      />
    </>
  )
}

function SignInErrorMessage({ isError }: { isError: boolean }) {
  if (!isError) return null

  return (
    <span className={styles.errorMessage}>
      학번 혹은 비밀번호를 확인해주세요.
    </span>
  )
}

function SignInForm() {
  const { register, handleSubmit, errors, isValid } = useSignInForm()
  const { mutate, isError } = useSignIn()

  const onSubmit = (data: z.infer<typeof signInFormSchema>) => {
    if (isValid) {
      mutate(data)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
      <SignInFormFields register={register} errors={errors} />
      <Button type="submit">로그인</Button>
      <SignInErrorMessage isError={isError} />
    </form>
  )
}

export { SignInForm }
