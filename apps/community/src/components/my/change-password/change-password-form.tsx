'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button, Input } from '@aics-client/design-system';
import * as styles from '~/components/my/change-password/change-password-form.css';
import { useChangePasswordMutation } from '~/hooks/use-change-password-mutation';

const changePasswordSchema = z
  .object({
    originalPassword: z
      .string()
      .min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' })
      .regex(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*])[a-zA-Z0-9~!@#$%^&*]{8,15}$/,
        { message: '비밀번호는 영문, 숫자, 특수문자를 포함해야 합니다.' },
      ),
    newPassword: z
      .string()
      .min(8, { message: '비밀번호는 최소 8자 이상이어야 합니다.' })
      .regex(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*])[a-zA-Z0-9~!@#$%^&*]{8,15}$/,
        { message: '비밀번호는 영문, 숫자, 특수문자를 포함해야 합니다.' },
      ),
    confirmNewPassword: z
      .string()
      .min(1, { message: '새 비밀번호 확인을 입력해주세요.' }),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirmNewPassword'],
  });

const defaultValues = {
  originalPassword: '',
  newPassword: '',
  confirmNewPassword: '',
};

const ChangePasswordForm = () => {
  const mutation = useChangePasswordMutation();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<z.infer<typeof changePasswordSchema>>({
    resolver: zodResolver(changePasswordSchema),
    mode: 'onChange',
    defaultValues,
  });

  const onSubmit = (data: z.infer<typeof changePasswordSchema>) => {
    mutation.mutate(data, {
      onSuccess: () => {
        alert('비밀번호 변경이 완료되었습니다.');
      },
      onError: () => {
        alert('현재 비밀번호를 다시 확인해주세요.');
      },
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
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

      <Button type="submit" color="black" disabled={!isValid}>
        비밀번호 변경
      </Button>
    </form>
  );
};

export default ChangePasswordForm;
