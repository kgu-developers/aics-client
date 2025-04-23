'use client'

import { useForm, useWatch } from 'react-hook-form'
import { z } from 'zod'

import { Input } from '@aics-client/design-system'
import { zodResolver } from '@hookform/resolvers/zod'

import { AuthButton } from '~/features/auth/components/auth-button'
import * as styles from '~/features/auth/components/sign-up-form.css'

const signUpFormSchema = z
  .object({
    studentId: z.string().min(1, { message: '학번을 입력해주세요.' }),
    password: z
      .string()
      .min(1, { message: '비밀번호를 입력해주세요.' })
      .regex(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*])[a-zA-Z0-9~!@#$%^&*]{8,15}$/,
        { message: '올바른 비밀번호 형식이 아닙니다.' },
      ),
    confirm_password: z
      .string()
      .min(1, { message: '비밀번호 확인을 입력해주세요.' }),
    name: z.string().min(1, { message: '이름을 입력해주세요.' }),
    email: z
      .string()
      .min(1, { message: '이메일을 입력해주세요.' })
      .email({ message: '올바른 이메일 형식이 아닙니다.' }),
    phone: z.string().min(1, { message: '연락처를 입력해주세요.' }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirm_password'],
  })

const defaultValues = {
  studentId: '',
  password: '',
  confirm_password: '',
  name: '',
  email: '',
  phone: '',
}

function SignUpForm() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<z.infer<typeof signUpFormSchema>>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues,
  })

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
  })

  const isFormValid =
    studentId && password && confirmPassword && name && email && phone

  const onSubmit = (data: z.infer<typeof signUpFormSchema>) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
      <div className={styles.formField}>
        <Input
          {...register('studentId')}
          type="text"
          label="학번"
          placeholder="학번을 입력해주세요"
          message={errors.studentId?.message}
        />
      </div>

      <div className={styles.formField}>
        <Input
          {...register('password')}
          type="password"
          label="비밀번호"
          placeholder="영문자, 숫자, 특수문자 포함 8~15자"
          message={errors.password?.message}
        />
        <Input
          {...register('confirm_password')}
          type="password"
          placeholder="비밀번호를 확인해 주세요"
          message={errors.confirm_password?.message}
        />
      </div>

      <div className={styles.formField}>
        <Input
          {...register('name')}
          type="text"
          label="이름"
          placeholder="이름을 입력해주세요"
          message={errors.name?.message}
        />
      </div>

      <div className={styles.formField}>
        <Input
          {...register('email')}
          type="text"
          label="이메일"
          placeholder="이메일을 입력해주세요"
          message={errors.email?.message}
        />
      </div>

      <div className={styles.formField}>
        <Input
          {...register('phone')}
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
  )
}

export { SignUpForm }
