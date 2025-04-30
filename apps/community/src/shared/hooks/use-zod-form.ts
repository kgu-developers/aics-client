import { zodResolver } from '@hookform/resolvers/zod'
import { type DefaultValues, useForm } from 'react-hook-form'
import type { z } from 'zod'

function useZodForm<T extends z.ZodTypeAny>({
  schema,
  defaultValues,
  mode = 'onSubmit',
}: {
  schema: T
  defaultValues: DefaultValues<z.infer<T>>
  mode?: 'onChange' | 'onBlur' | 'onSubmit'
}) {
  return useForm<z.infer<T>>({
    resolver: zodResolver(schema),
    defaultValues,
    mode,
  })
}

export { useZodForm }
