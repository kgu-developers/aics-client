import { z } from 'zod'

const editMyInfoSchema = z.object({
  phone: z
    .string()
    .min(1, {
      message: '전화번호를 입력해주세요.',
    })
    .regex(/^\d{3}-\d{4}-\d{4}$/, {
      message: '전화번호는 010-1234-5678 형식이어야 합니다.',
    }),
  email: z.string().email({
    message: '올바른 이메일 형식이 아닙니다.',
  }),
})

export { editMyInfoSchema }
