import clsx from 'clsx';
import type { HTMLAttributes } from 'react';
import { spacingVariants } from './spacing.css';

interface Props extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children?: never;
}

export default function Spacing({ size = 'md', className, ...props }: Props) {
  return (
    <div className={clsx(spacingVariants({ size }), className)} {...props} />
  );
}
