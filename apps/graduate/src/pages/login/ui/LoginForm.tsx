import { useForm } from 'react-hook-form';

import { Button } from '~/shared/components';

import { useSubmitLogin } from '../api/submitLogin';
import type { LoginFormData } from '../model/login';
import * as styles from '../styles/loginForm.css';

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    defaultValues: {
      userId: '',
      password: '',
    },
  });

  const { mutate: submitLogin, isPending } = useSubmitLogin({
    onSuccess: () => {
      window.location.reload();
    },
  });

  const onSubmit = (data: LoginFormData) => {
    submitLogin(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <div className={styles.inputWrapper}>
        <input
          type='text'
          placeholder='학번'
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
      <Button
        size='md'
        type='submit'
        disabled={isPending}
        className={styles.button}
      >
        {isPending ? '로그인 중...' : '로그인'}
      </Button>
    </form>
  );
}
