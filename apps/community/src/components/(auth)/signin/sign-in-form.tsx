'use client';

import { Input } from '@aics-client/design-system';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';

import { AuthButton } from '~/components/(auth)/auth-button';
import * as styles from '~/components/(auth)/signin/sign-in-form.css';
import { defaultValues, signInFormSchema } from '~/schemas/sign-in-form-schema';

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<z.infer<typeof signInFormSchema>>({
    resolver: zodResolver(signInFormSchema),
    defaultValues,
  });

  const onSubmit = (data: z.infer<typeof signInFormSchema>) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
      <Input
        {...register('studentId')}
        type="text"
        placeholder="학번을 입력해주세요"
        message={errors.studentId?.message}
      />
      <Input
        {...register('password')}
        type="password"
        placeholder="비밀번호를 입력해주세요"
        message={errors.password?.message}
      />
      <AuthButton type="submit" disabled={!isValid}>
        로그인
      </AuthButton>
    </form>
  );
}

export { SignInForm };
