import * as styles from './auth-button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function AuthButton({ children, ...props }: ButtonProps) {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
}

export { AuthButton };
