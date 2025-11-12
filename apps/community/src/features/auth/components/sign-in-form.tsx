'use client';

import { Button, Input } from '@aics-client/design-system';
import type { FieldErrors, UseFormRegister } from 'react-hook-form';
import type { z } from 'zod';


import FormErrorMessage from '~/shared/components/form/form-error-message';
import { useZodForm } from '~/shared/hooks/use-zod-form';

import * as styles from '~/features/auth/components/sign-in-form.css';
import { useSignIn } from '~/features/auth/hooks/use-sign-in.mutation';
import {
  defaultValues,
  signInFormSchema,
} from '~/features/auth/schemas/sign-in-form-schema';

function SignInFormFields({
  register,
  errors,
}: {
  register: UseFormRegister<z.infer<typeof signInFormSchema>>;
  errors: FieldErrors<z.infer<typeof signInFormSchema>>;
}) {
  return (
    <>
      <Input
        {...register('userId')}
        type='text'
        placeholder='학번을 입력해주세요'
        message={errors.userId?.message}
      />
      <Input
        {...register('password')}
        type='password'
        placeholder='비밀번호를 입력해주세요'
        message={errors.password?.message}
      />
    </>
  );
}

function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useZodForm({
    schema: signInFormSchema,
    defaultValues,
  });
  const { mutate, isError } = useSignIn();

  const onSubmit = (data: z.infer<typeof signInFormSchema>) => {
    if (isValid) mutate(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
      <SignInFormFields register={register} errors={errors} />
      <Button color='black' type='submit'>
        로그인
      </Button>
      <FormErrorMessage
        isError={isError}
        message='학번 혹은 비밀번호를 확인해주세요.'
      />
    </form>
  );
}

export default SignInForm;
