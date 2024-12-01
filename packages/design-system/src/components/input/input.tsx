import { cn } from '../../utils';
import * as styles from './input.css';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  message?: string;
  border?: boolean;
}

export default function Input({
  label,
  message,
  border = true,
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
      <input className={styles.input({ border: border })} {...props} />
      {message && <span className={styles.message()}>{message}</span>}
    </div>
  );
}
