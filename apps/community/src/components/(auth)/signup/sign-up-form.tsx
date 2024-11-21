'use client';

import { Input } from '@aics-client/design-system';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, useWatch } from 'react-hook-form';
import type { z } from 'zod';

import { AuthButton } from '~/components/(auth)/auth-button';
import * as styles from '~/components/(auth)/signup/sign-up-form.css';
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
        <Input
          {...register('studentId')}
          id="studentId"
          type="text"
          label="학번"
          placeholder="학번을 입력해주세요"
          message={errors.studentId?.message}
        />
      </div>

      <div className={styles.formField}>
        <Input
          {...register('password')}
          id="password"
          type="password"
          label="비밀번호"
          placeholder="영문자, 숫자, 특수문자 포함 8~15자"
          message={errors.password?.message}
        />
        <Input
          {...register('confirm_password')}
          id="confirm_password"
          type="password"
          placeholder="비밀번호를 확인해 주세요"
          message={errors.confirm_password?.message}
        />
      </div>

      <div className={styles.formField}>
        <Input
          {...register('name')}
          id="name"
          type="text"
          label="이름"
          placeholder="이름을 입력해주세요"
          message={errors.name?.message}
        />
      </div>

      <div className={styles.formField}>
        <Input
          {...register('email')}
          id="email"
          type="text"
          label="이메일"
          placeholder="이메일을 입력해주세요"
          message={errors.email?.message}
        />
      </div>

      <div className={styles.formField}>
        <Input
          {...register('phone')}
          id="phone"
          type="text"
          label="연락처"
          placeholder="연락처를 입력해주세요"
          message={errors.phone?.message}
        />
      </div>

      <AuthButton type="submit" disabled={!isFormValid}>
        회원가입
      </AuthButton>
    </form>
  );
}

export { SignUpForm };
