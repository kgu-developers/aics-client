import { z } from 'zod'

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
  })

const defaultValues = {
  originalPassword: '',
  newPassword: '',
  confirmNewPassword: '',
}

export { changePasswordSchema, defaultValues }
