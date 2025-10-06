import type { ButtonHTMLAttributes, ReactNode } from 'react'
import {
  type ButtonSize,
  type ButtonVariant,
  button,
  sizes,
  variants,
} from './Button.css'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  children: ReactNode
  fullWidth?: boolean
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  fullWidth = false,
  className,
  disabled,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`${button} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className || ''}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
