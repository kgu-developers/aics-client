import classNames from 'classnames';
import type { HTMLAttributes } from 'react';
import { spacingVariants } from './spacing.css';

interface Props extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children?: never;
}

export default function Spacing({ size = 'md', className, ...props }: Props) {
  return (
    <div
      className={classNames(spacingVariants({ size }), className)}
      {...props}
    />
  );
}
