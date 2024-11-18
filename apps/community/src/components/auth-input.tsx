import * as styles from './auth-input.css';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type: string;
  placeholder: string;
}

function AuthInput({ type, placeholder, ...props }: InputProps) {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      {...props}
    />
  );
}

export { AuthInput };
