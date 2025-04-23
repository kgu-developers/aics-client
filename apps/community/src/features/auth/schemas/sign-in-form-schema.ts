import { z } from 'zod'

const signInFormSchema = z.object({
  userId: z.string().min(1, { message: '학번을 입력해주세요.' }),
  password: z.string().min(1, { message: '비밀번호를 입력해주세요.' }),
})

const defaultValues = {
  userId: '',
  password: '',
}

export { signInFormSchema, defaultValues }
