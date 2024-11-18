'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useWatch } from 'react-hook-form';
import type { z } from 'zod';

import { AuthButton } from '~/components/auth-button';
import { AuthInput } from '~/components/auth-input';
import * as styles from '~/components/sign-up-form.css';
import { defaultValues, signUpFormSchema } from '~/schemas/sign-up-form-schema';

function SignUpForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues,
  });

  const onSubmit = (data: z.infer<typeof signUpFormSchema>) => {
    console.log(data);
  };

  const [studentId, password, confirmPassword, name, email, phone] = useWatch({
    control,
    name: [
      'studentId',
      'password',
      'confirm_password',
      'name',
      'email',
      'phone',
    ],
  });

  const isFormValid =
    studentId && password && confirmPassword && name && email && phone;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
      <div className={styles.formField}>
        <label htmlFor="studentId">학번</label>
        <AuthInput
          {...register('studentId')}
          id="studentId"
          type="text"
          placeholder="학번을 입력해주세요"
        />
        {errors.studentId && (
          <span className={styles.errorMessage}>
            {errors.studentId.message}
          </span>
        )}
      </div>

      <div className={styles.formField}>
        <label htmlFor="password">비밀번호</label>
        <AuthInput
          {...register('password')}
          id="password"
          type="password"
          placeholder="영문자, 숫자, 특수문자 포함 8~15자"
        />
        {errors.password && (
          <span className={styles.errorMessage}>{errors.password.message}</span>
        )}

        <AuthInput
          {...register('confirm_password')}
          id="confirm_password"
          type="password"
          placeholder="비밀번호를 확인해 주세요"
        />
        {errors.confirm_password && (
          <span className={styles.errorMessage}>
            {errors.confirm_password.message}
          </span>
        )}
      </div>

      <div className={styles.formField}>
        <label htmlFor="name">이름</label>
        <AuthInput
          {...register('name')}
          id="name"
          type="text"
          placeholder="이름을 입력해주세요"
        />
        {errors.name && (
          <span className={styles.errorMessage}>{errors.name.message}</span>
        )}
      </div>

      <div className={styles.formField}>
        <label htmlFor="email">이메일</label>
        <AuthInput
          {...register('email')}
          id="email"
          type="text"
          placeholder="이메일을 입력해주세요"
        />
        {errors.email && (
          <span className={styles.errorMessage}>{errors.email.message}</span>
        )}
      </div>

      <div className={styles.formField}>
        <label htmlFor="phone">연락처</label>
        <AuthInput
          {...register('phone')}
          id="phone"
          type="text"
          placeholder="연락처를 입력해주세요"
        />
        {errors.phone && (
          <span className={styles.errorMessage}>{errors.phone.message}</span>
        )}
      </div>

      <AuthButton type="submit" disabled={!isFormValid}>
        회원가입
      </AuthButton>
    </form>
  );
}

export { SignUpForm };
