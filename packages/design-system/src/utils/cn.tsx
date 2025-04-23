import { clsx } from 'clsx/lite'

export function cn(...inputs: Array<string | boolean | null | undefined>) {
  return clsx(...inputs)
}
