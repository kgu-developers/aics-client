import classNames from 'classnames';
import type { ButtonHTMLAttributes } from 'react';
import { buttonVariants } from './button.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({
  size,
  color,
  disabled,
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      className={classNames(
        buttonVariants({ size, color, disabled }),
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
