'use client';

import { Input } from '@aics-client/design-system';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { AuthButton } from '~/components/(auth)/auth-button';
import * as styles from '~/components/(auth)/signin/sign-in-form.css';

const signInFormSchema = z.object({
  studentId: z.string().min(1, { message: '학번을 입력해주세요.' }),
  password: z
    .string()
    .min(1, { message: '비밀번호를 입력해주세요.' })
    .regex(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*])[a-zA-Z0-9~!@#$%^&*]{8,15}$/,
      { message: '올바른 비밀번호 형식이 아닙니다.' },
    ),
});

const defaultValues = {
  studentId: '',
  password: '',
};

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
