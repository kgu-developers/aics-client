import { z } from 'zod'

const signUpFormSchema = z
  .object({
    userId: z.string().min(1, { message: '학번을 입력해주세요.' }),
    password: z
      .string()
      .min(1, { message: '비밀번호를 입력해주세요.' })
      .regex(
        /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*])[a-zA-Z0-9~!@#$%^&*]{8,15}$/,
        {
          message: '비밀번호는 8~15자 영문, 숫자, 특수문자를 포함해야 합니다.',
        },
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
    major: z.string().min(1, { message: '전공을 선택해주세요.' }),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['confirm_password'],
  })

const defaultValues = {
  userId: '',
  password: '',
  confirm_password: '',
  name: '',
  email: '',
  phone: '',
  major: '',
}

export { signUpFormSchema, defaultValues }
