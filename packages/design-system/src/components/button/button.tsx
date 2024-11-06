import classNames from 'classnames';
import type { ButtonHTMLAttributes } from 'react';
import Spinner from '../spinner/spinner';
import { buttonVariants } from './button.css';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
}

export default function Button({
  size = 'md',
  color = 'primary',
  loading = false,
  disabled = false,
  className,
  children,
  ...props
}: Props) {
  return (
    <button
      className={classNames(
        buttonVariants({ size, color, loading, disabled }),
        className,
      )}
      disabled={loading || disabled}
      {...props}
    >
      {loading && <Spinner />}
      {children}
    </button>
  );
}
