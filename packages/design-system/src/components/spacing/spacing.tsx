import type { HTMLAttributes } from 'react'
import { cn } from '../../utils'
import { spacingVariants } from './spacing.css'

interface Props extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children?: never
}

export default function Spacing({ size = 'md', className, ...props }: Props) {
  return <div className={cn(spacingVariants({ size }), className)} {...props} />
}
