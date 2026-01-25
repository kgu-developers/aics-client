import { useRouter } from '@tanstack/react-router';
import { useForm } from 'react-hook-form';

import { Button } from '~/shared/components';

import * as styles from '~/client/pages/auth/login/styles/loginForm.css';
import { useSubmitSignup } from '~/client/pages/auth/signup/api/submitSignup';
import type { SignupFormData } from '~/client/pages/auth/signup/model/signup';

export default function SignupForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormData>({
    defaultValues: {
      userId: '',
      password: '',
      name: '',
      email: '',
      phone: '',
      major: 'CSE',
    },
  });

  const { mutate: submitSignup, isPending } = useSubmitSignup({
    onSuccess: () => router.navigate({ to: '/login' }),
  });

  const onSubmit = (data: SignupFormData) => {
    submitSignup(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.inputWrapper}>
        <input
          type='text'
          placeholder='학번 (예: 202412345)'
          {...register('userId', {
            required: '학번을 입력하세요',
          })}
          className={styles.input}
        />
        {errors.userId && (
          <p className={styles.errorMessage}>{errors.userId.message}</p>
        )}
      </div>
      <div className={styles.inputWrapper}>
        <input
          type='password'
          placeholder='비밀번호'
          {...register('password', {
            required: '비밀번호를 입력하세요',
          })}
          className={styles.input}
        />
        {errors.password && (
          <p className={styles.errorMessage}>{errors.password.message}</p>
        )}
      </div>
      <div className={styles.inputWrapper}>
        <input
          type='text'
          placeholder='이름'
          {...register('name', {
            required: '이름을 입력하세요',
          })}
          className={styles.input}
        />
        {errors.name && (
          <p className={styles.errorMessage}>{errors.name.message}</p>
        )}
      </div>
      <div className={styles.inputWrapper}>
        <input
          type='email'
          placeholder='이메일'
          {...register('email', {
            required: '이메일을 입력하세요',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: '올바른 이메일 형식이 아닙니다',
            },
          })}
          className={styles.input}
        />
        {errors.email && (
          <p className={styles.errorMessage}>{errors.email.message}</p>
        )}
      </div>
      <div className={styles.inputWrapper}>
        <input
          type='tel'
          placeholder='전화번호 (010-1234-5678)'
          {...register('phone', {
            required: '전화번호를 입력하세요',
            pattern: {
              value: /^01[0-9]-\d{4}-\d{4}$/,
              message: '올바른 전화번호 형식이 아닙니다 (예: 010-1234-5678)',
            },
          })}
          className={styles.input}
        />
        {errors.phone && (
          <p className={styles.errorMessage}>{errors.phone.message}</p>
        )}
      </div>
      <div className={styles.inputWrapper}>
        <input
          type='text'
          placeholder='전공 (예: CSE)'
          {...register('major', {
            required: '전공을 입력하세요',
          })}
          className={styles.input}
        />
        {errors.major && (
          <p className={styles.errorMessage}>{errors.major.message}</p>
        )}
      </div>
      <Button
        size='md'
        type='submit'
        disabled={isPending}
        className={styles.button}
      >
        {isPending ? '회원가입 중...' : '회원가입'}
      </Button>
    </form>
  );
}
