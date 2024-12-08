import { cn } from '../../utils';
import Spinner from '../spinner/spinner';
import { buttonVariants } from './button.css';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'danger' | 'warning' | 'black';
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
      className={cn(
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
