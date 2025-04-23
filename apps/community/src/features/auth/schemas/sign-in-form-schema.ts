import { z } from 'zod'

const signInFormSchema = z.object({
  userId: z.string().min(1, { message: '학번을 입력해주세요.' }),
  password: z
    .string()
    .min(1, { message: '비밀번호를 입력해주세요.' })
    .regex(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*])[a-zA-Z0-9~!@#$%^&*]{8,15}$/,
      { message: '올바른 비밀번호 형식이 아닙니다.' },
    ),
})

const defaultValues = {
  userId: '',
  password: '',
}

export { signInFormSchema, defaultValues }
