import clsx from 'clsx';
import { badgeVariants } from './badge.css';

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'danger' | 'warning';
}

export default function Badge({
  size = 'md',
  color = 'primary',
  className,
  children,
  ...props
}: Props) {
  return (
    <span
      className={clsx(badgeVariants({ size, color }), className)}
      {...props}
    >
      {children}
    </span>
  );
}
