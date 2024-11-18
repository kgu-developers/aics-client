'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useWatch } from 'react-hook-form';
import type { z } from 'zod';

import { AuthButton } from '~/components/auth-button';
import { AuthInput } from '~/components/auth-input';
import * as styles from '~/components/sign-in-form.css';
import { defaultValues, signInFormSchema } from '~/schemas/sign-in-form-schema';

function SignInForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues,
  });

  const onSubmit = (data: z.infer<typeof signInFormSchema>) => {
    console.log(data);
  };

  const [studentId, password] = useWatch({
    control,
    name: ['studentId', 'password'],
  });
  const isFormValid = studentId && password;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
      <AuthInput
        {...register('studentId')}
        type="text"
        placeholder="학번을 입력해주세요"
      />
      {errors.studentId && (
        <span className={styles.errorMessage}>{errors.studentId.message}</span>
      )}
      <AuthInput
        {...register('password')}
        type="password"
        placeholder="비밀번호를 입력해주세요"
      />
      {errors.password && (
        <span className={styles.errorMessage}>{errors.password.message}</span>
      )}
      <AuthButton type="submit" disabled={!isFormValid}>
        로그인
      </AuthButton>
    </form>
  );
}

export { SignInForm };
