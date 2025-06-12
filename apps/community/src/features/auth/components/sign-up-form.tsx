'use client'

import { Button, Input } from '@aics-client/design-system'
import type {
  FieldErrors,
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form'
import type { z } from 'zod'
import * as styles from '~/features/auth/components/sign-up-form.css'
import { useSignUp } from '~/features/auth/hooks/use-sign-up.mutation'
import {
  defaultValues,
  signUpFormSchema,
} from '~/features/auth/schemas/sign-up-form-schema'
import FormErrorMessage from '~/shared/components/form/form-error-message'
import Select from '~/shared/components/select/select'
import { useZodForm } from '~/shared/hooks/use-zod-form'

const MAJOR_OPTIONS = [
  { label: '컴퓨터공학전공', value: 'CSE' },
  { label: '인공지능전공', value: 'AIT' },
  { label: 'SW안전보안전공', value: 'SSS' },
]

type SignUpFormValues = z.infer<typeof signUpFormSchema>

interface SignUpFormFieldsProps {
  register: UseFormRegister<SignUpFormValues>
  errors: FieldErrors<SignUpFormValues>
  setValue: UseFormSetValue<SignUpFormValues>
  watch: UseFormWatch<SignUpFormValues>
}

function SignUpFormFields({
  register,
  errors,
  setValue,
  watch,
}: SignUpFormFieldsProps) {
  return (
    <>
      <div className={styles.formField}>
        <Input
          {...register('userId')}
          type="text"
          label="학번"
          placeholder="학번을 입력해주세요"
          message={errors.userId?.message}
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
        <Select
          options={MAJOR_OPTIONS}
          value={watch('major')}
          onChange={(value) =>
            setValue('major', value, { shouldValidate: true })
          }
          label="전공"
          placeholder="전공을 선택해주세요"
          message={errors.major?.message}
        />
      </div>
      <div className={styles.formField}>
        <Input
          {...register('email')}
          type="text"
          label="이메일 (반드시 경기대학교 이메일을 사용해주세요.)"
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
    </>
  )
}

function SignUpForm() {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isValid },
  } = useZodForm({
    schema: signUpFormSchema,
    defaultValues,
  })
  const { mutate, isError } = useSignUp()

  const onSubmit = (data: SignUpFormValues) => {
    if (isValid) {
      const { confirm_password, ...submitData } = data
      mutate(submitData)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formWrapper}>
      <SignUpFormFields
        register={register}
        errors={errors}
        setValue={setValue}
        watch={watch}
      />
      <Button type="submit" color="black">
        회원가입
      </Button>
      <FormErrorMessage isError={isError} message="회원가입에 실패했습니다." />
    </form>
  )
}

export default SignUpForm
