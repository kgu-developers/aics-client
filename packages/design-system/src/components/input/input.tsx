import { cn } from '../../utils';
import * as styles from './input.css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  value?: string;
  message?: string;
  className?: string;
}

export default function Input({
  label,
  value,
  message,
  className,
  ...props
}: Props) {
  return (
    <div className={cn(styles.inputWrapper(), className)}>
      {label && (
        <label htmlFor={props.id} className={styles.label()}>
          {label}
        </label>
      )}
      <input value={value} className={styles.input()} {...props} />
      {message && <span className={styles.message()}>{message}</span>}
    </div>
  );
}
