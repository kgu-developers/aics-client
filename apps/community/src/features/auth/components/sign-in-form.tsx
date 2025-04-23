'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import type { z } from 'zod'

import { Input } from '@aics-client/design-system'

import { AuthButton } from '~/features/auth/components/auth-button'
import * as styles from '~/features/auth/components/sign-in-form.css'
import { useSignIn } from '~/features/auth/hooks/use-sign-in'
import { signInFormSchema } from '~/features/auth/schemas/sign-in-form-schema'

const defaultValues = {
  userId: '',
  password: '',
}

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues,
  })

  const mutation = useSignIn()

  const handlePressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit((data) => mutation.mutate(data))
    }
  }

  const resetErrorMessage = () => {
    if (mutation.isError) {
      mutation.reset()
    }
  }

  return (
    <form
      onSubmit={handleSubmit((data) => mutation.mutate(data))}
      className={styles.formWrapper}
    >
      <Input
        {...register('userId', {
          onChange: resetErrorMessage,
        })}
        type="text"
        placeholder="학번을 입력해주세요"
        onKeyUp={handlePressEnter}
        message={errors.userId?.message}
      />
      <Input
        {...register('password', {
          onChange: resetErrorMessage,
        })}
        type="password"
        placeholder="비밀번호를 입력해주세요"
        onKeyUp={handlePressEnter}
        message={errors.password?.message}
      />
      {mutation.isError && (
        <span className={styles.errorMessage}>
          학번 혹은 비밀번호를 확인해주세요.
        </span>
      )}
      <AuthButton type="submit" disabled={!isValid}>
        로그인
      </AuthButton>
    </form>
  )
}

export { SignInForm }
