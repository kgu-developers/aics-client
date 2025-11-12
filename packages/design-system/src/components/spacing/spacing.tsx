import type { HTMLAttributes } from 'react';

import { spacingVariants } from './spacing.css';
import { cn } from '../../utils';

interface Props extends HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  children?: never;
}

export default function Spacing({ size = 'md', className, ...props }: Props) {
  return (
    <div className={cn(spacingVariants({ size }), className)} {...props} />
  );
}
